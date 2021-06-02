from PIL import Image, ImageEnhance
import math
import os

path = os.getcwd()+"/galleries_workbench"
os.chdir(path)

logo_size = 100, 100
watermark = Image.open("../watermark3.png")
position = 50, 50

for directory in os.listdir():
    os.chdir(path + "/" + directory)
    print("Boosting files in: {}".format(os.getcwd()))
    for file in os.listdir():
        image = Image.open(file)
        width, height = image.size
        position = width - 130, height - 130

        transparent = Image.new('RGBA', (width, height), (0, 0, 0, 0))
        transparent.paste(image, (0, 0))
        transparent.paste(watermark, position, mask=watermark)
        transparent.convert("RGB").save(file)


