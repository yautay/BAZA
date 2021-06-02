from PIL import Image, ImageEnhance
import math
import os

html_part_1 = open("lib/gallery_part_1.kit", "r")
html_part_3 = open("lib/gallery_part_3.kit", "r")
html_head = html_part_1.read()
html_foot = html_part_3.read()
path = os.getcwd()+"/galleries_workbench"
os.chdir(path)

pattern_gallery_div = "<div class=\"gallery-item\"><div class=\"content\"><img src=\"{}\" alt=\"\"></div></div>"
pattern_galleries_div = "<div id=\"{id}\" class=\"single-gallery\">\n" \
                        "   <div class=\"gallery-bg\"></div>\n" \
                        "   <a href=\"{href}\"></a>\n" \
                        "   <div class=\"gallery-title\">{title}</div>\n" \
                        "   <div class=\"gallery-desc\">{desc}</div>\n" \
                        "</div>\n\n\n"

galleries_path = "./{}.html\n"
galleries_index = open("../dist/img/gallery/galleries_index.txt", "a")

for directory in os.listdir():
    if directory[-4:] == "html":
        continue
    html = html_head
    os.chdir(path + "/" + directory)
    print("Generating gallery in: {}".format(os.getcwd()))
    with open("index_{}.txt".format(directory), "r") as index_file:
        for line in index_file:
            html += pattern_gallery_div.format(line[:-1])
    html += html_foot
    with open("../{}.html".format(directory), "w") as gallery_html:
        gallery_html.write(html)
    galleries_index.write(galleries_path.format(directory))
    with open("../divs_to_main.html", "a") as main_divs:
        href = galleries_path.format(directory)
        main_divs.write(pattern_galleries_div.format(id=directory,
                                                     href=href[:-1],
                                                     title=directory,
                                                     desc="WSTAWIĆ OPIS"))

    os.chdir(path)

galleries_index.close()
html_part_1.close()
html_part_3.close()


