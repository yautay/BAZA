from PIL import Image, ImageEnhance
import os

path = os.getcwd()+"/galleries_workbench"
os.chdir(path)

contrast_factor = 1.2

for directory in os.listdir():
    os.chdir(path + "/" + directory)
    print("Boosting files in: {}".format(os.getcwd()))
    for file in os.listdir():
        image = Image.open(file)
        # image.show()
        enhancer = ImageEnhance.Contrast(image)
        im_output = enhancer.enhance(contrast_factor)
        # im_output.show()
        im_output.save(file)



