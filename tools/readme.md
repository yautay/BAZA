# Galeria
## Pzygotowanie zdjęć
### krok 1
Zdjęcia skopiować w katalogu o nazwie galerii i umieścić w galleries_workbench
### krok 2
Kolejność uruchomienia skryptów:
- optimize_pictures.py
- boost_pictures.py
  - na tym etapie należy ręcznie dokonać orientacji zdjęć!
~~- add_logo.py~~
- index_pictures.py
- generate_gallery.py
### krok 3
Synchronizacja plików z galleries_workbench do katalogu /html/gallery/galleries/ na hoście OVH
### krok 4
- uruchomić index_galleries.py
- ręcznie zmodyfikować body /html/gallery/main.html dodając nowe div'y z divs_to_main.html
- usunąć divs_to_main
