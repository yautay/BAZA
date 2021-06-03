from PIL import Image
import math
import os

path = os.getcwd() + "/galleries_workbench"
os.chdir(path)

desired_size = 1600, 800
size_b4 = 0
size_af = 0

print("STEP 1 - RENAMING PICTURES \n")
for directory in os.listdir():
    if directory != ".gitkeep":
        os.chdir(path + "/" + directory)
    print("Renaming files in: {}".format(os.getcwd()))
    file_count = 1
    for file in os.listdir():
        size_b4 += os.path.getsize(file)
        f_name, f_ext = os.path.splitext(file)
        print("Replacing file \"{}\"".format(f_name))
        f_name = "{}_{}".format(directory, str(file_count))
        new_name = "{}{}".format(f_name, f_ext)
        os.rename(file, new_name)
        file_count += 1

size_b4 = size_b4 / math.pow(1024, 2)
print("Total size of pictures {}MB".format(size_b4))

os.chdir(path)
print("STEP 2 - OPTIMIZING PICTURES \n")

for directory in os.listdir():
    os.chdir(path + "/" + directory)
    print("Optimizing files in: {}".format(os.getcwd()))
    for file in os.listdir():
        image = Image.open(file)
        image.thumbnail(desired_size)
        image.save(file, optimize=True, quality=65)
        size_af += os.path.getsize(file)

size_af = size_af / math.pow(1024, 2)
print("Total size of pictures after optimization {}MB, saved {}MB\n".format(size_af, size_b4 - size_af))
