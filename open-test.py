from libcloud.compute.types import Provider
from libcloud.compute.providers import get_driver

auth_username = 'hackthon1'
auth_password = 'buokiugh'
auth_url = 'http://172.17.18.3:5000'
project_name = 'hackthon1'
region_name = 'RegionOne'

provider = get_driver(Provider.OPENSTACK)
conn = provider(auth_username,
                auth_password,
                ex_force_auth_url=auth_url,
                ex_force_auth_version='2.0_password',
                ex_tenant_name=project_name,
                ex_force_service_region=region_name)
                                                        #To check the images and favors
'''
images = conn.list_images()
for image in images:
    print(image)

flavors = conn.list_sizes()
for flavor in flavors:
    print(flavor)
'''
                                                        #our image info.
image_id = '1ac9661c-d041-4d16-b532-ec3626f8db58'
image = conn.get_image(image_id)
#print(image)

flavor_id = '3'
flavor = conn.ex_get_size(flavor_id)
#print(flavor)

print('Checking for existing SSH key pair...')         #key pair config
keypair_name = 'hospital_key'
pub_key_file = '~/home/hospital__key_converted.ppk'
keypair_exists = False
for keypair in conn.list_key_pairs():
    if keypair.name == keypair_name:
        keypair_exists = True

if keypair_exists:
    print('Keypair ' + keypair_name + ' already exists. Skipping import.')
else:
    print('adding keypair...')
    conn.import_key_pair_from_file(keypair_name, pub_key_file)

for keypair in conn.list_key_pairs():
    print(keypair)

userdata = '''#!/bin/bash
sudo apt-get install git -y
sudo git clone https://github.com/AnCheTeng/nxg_medical_cloud.git
sudo curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y  nodejs
sudo apt-get install mongodb -y
sudo apt-get install npm -y

sudo npm install forever -g

(cd /nxg_medical_cloud/backend/ && sudo forever start server.js)

(cd /nxg_medical_cloud/backend/ && sudo node initial.js)
'''


instance_name = 'testing1'
testing_instance = conn.create_node(name=instance_name, image=image, size=flavor, ex_keyname=keypair_name, ex_userdata=userdata)
#print(testing_instance)
conn.wait_until_running([testing_instance])



'''
print('Checking for existing instance...')
instance_name = 'all-in-one'
instance_exists = False
for instance in conn.list_nodes():
    if instance.name == instance_name:
        testing_instance = instance
        instance_exists = True

if instance_exists:
    print('Instance ' + testing_instance.name + ' already exists. Skipping creation.')
else    testing_instance = conn.create_node(name=instance_name,
                                        image=image,
                                        size=flavor,
                                        ex_keyname=keypair_name,
                                        )
    conn.wait_until_running([testing_instance])


print('Checking for existing security group...')      #security group config
security_group_name = 'default'
security_group_exists = False
for security_group in conn.ex_list_security_groups():
    if security_group.name == security_group_name:
        all_in_one_security_group = security_group
        security_group_exists = True

if security_group_exists:
    print('Security Group ' + all_in_one_security_group.name + ' already exists. Skipping creation.')
else:
    all_in_one_security_group = conn.ex_create_security_group(security_group_name, 'network access for all-in-one application.')
    conn.ex_create_security_group_rule(all_in_one_security_group, 'TCP', 80, 80)
    conn.ex_create_security_group_rule(all_in_one_security_group, 'TCP', 22, 22)
'''

private_ip = None                                    #ip config
if len(testing_instance.private_ips):
    private_ip = testing_instance.private_ips[0]
    print('Private IP found: {}'.format(private_ip))

public_ip = None
if len(testing_instance.public_ips):
    public_ip = testing_instance.public_ips[0]
    print('Public IP found: {}'.format(public_ip))


print('Checking for unused Floating IP...')
unused_floating_ip = None
for floating_ip in conn.ex_list_floating_ips():
    #print floating_ip.ip_address
    #if floating_ip.ip_address == "172.17.183.220":
        #print("YA")
    unused_floating_ip = floating_ip
   # break
if not unused_floating_ip and len(conn.ex_list_floating_ip_pools()):
    pool = conn.ex_list_floating_ip_pools()[0]
    print('Allocating new Floating IP from pool: {}'.format(pool))
    unused_floating_ip = pool.create_floating_ip()
print floating_ip.ip_address

if public_ip:
    print('Instance ' + testing_instance.name + ' already has a public ip. Skipping attachment.')
elif unused_floating_ip:
    conn.ex_attach_floating_ip_to_node(testing_instance, unused_floating_ip)
