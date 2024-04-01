# Plugins Utilizados
- [OBS Advanced Timer](https://github.com/cg2121/obs-advanced-timer)

# Background Removal
1. Download lastest version from [Github](https://github.com/occ-ai/obs-backgroundremoval/releases) to `/tmp` folder
1. Execute the commands above:
    ``` bash
    mkdir -p /tmp/background
    mv /tmp/obs-backgroundremoval* /tmp/background
    cd /tmp/background
    ar x obs-backgroundremoval-1.1.13-x86_64-linux-gnu.deb
    tar -xf data.tar.gz
    sudo rm -r /var/lib/flatpak/app/com.obsproject.Studio/current/active/files/lib/obs-plugins/obs-backgroundremoval
    sudo rm -r /var/lib/flatpak/app/com.obsproject.Studio/current/active/files/lib/obs-plugins/obs-backgroundremoval.so
    sudo rm -r /var/lib/flatpak/app/com.obsproject.Studio/current/active/files/share/obs/obs-plugins/obs-backgroundremoval
    sudo cp -r /tmp/background/usr/lib/x86_64-linux-gnu/obs-plugins/obs-backgroundremoval /var/lib/flatpak/app/com.obsproject.Studio/current/active/files/lib/obs-plugins/
    sudo cp /tmp/background/usr/lib/x86_64-linux-gnu/obs-plugins/obs-backgroundremoval.so /var/lib/flatpak/app/com.obsproject.Studio/current/active/files/lib/obs-plugins/
    sudo cp -r /tmp/background/usr/share/obs/obs-plugins/obs-backgroundremoval /var/lib/flatpak/app/com.obsproject.Studio/current/active/files/share/obs/obs-plugins/
    ```
