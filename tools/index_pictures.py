from PIL import Image, ImageEnhance
import math
import os

uri_galleries = "dist/img/gallery/{}"

path = os.getcwd()+"/galleries_workbench"
os.chdir(path)

for directory in os.listdir():
    os.chdir(path + "/" + directory)
    print("Indexing files in: {}".format(os.getcwd()))
    index_file = open("index_{}.txt".format(directory), "w")
    for file in os.listdir():
        if file[-3:] != "txt":
            gallery_picture_path = "{}/{}\n".format(directory, file)
            index_file.write(uri_galleries.format(gallery_picture_path))
    index_file.close()
