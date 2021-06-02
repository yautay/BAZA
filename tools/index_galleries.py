import os

print(os.getcwd())
galleries_path = "./{}\n"
with open("../dist/img/gallery/galleries_index.txt", "w") as index:

    path = os.getcwd()+"../dist/img/gallery"
    os.chdir(path)

    for file in os.listdir():
        if file[-4:] == "html" and file[:5] != "divs_":
            index.write(galleries_path.format(file))
