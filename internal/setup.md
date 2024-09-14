---
name: Setup Python
---

This page has two different ways you can use Python. If you are a beginner and Python is your first language, you should install IDLE, which is explained on this page.

## Installing IDLE (non-Linux)
- **Windows**<br>
Navigate to [the Python downloads for Windows](https://www.python.org/downloads/) and check the "Stable Releases" section for the latest version on Python that has a "Download Windows installer (xx-bit)" link under it.<br>
![Windows installer (64-bit) download example](/windows-install-python.png)<br>
Execute the installer file, tick "Add python.exe to PATH," and click **Install Now**.

- **macOS**<br>
Navigate to [the Python downloads for macOS](https://www.python.org/downloads/macos/) and check the "Stable Releases" section for the latest version of Python that has a "Download" link under it.<br>
![macOS 64-bit universal2 installer](/macos-install-python.png)<br>
Open the python `pkg` file to start installation.

## Installing IDLE (Linux)
#### Debian
Install the `idle3` package from apt.
```
$ sudo apt-get update && sudo apt-get install idle3
```

#### <span title="I use Arch btw">Arch</span> <!-- lol -->
Install `python` and `tk` using pacman.
```
$ sudo pacman -S python tk
```

#### Fedora
Install `python3-tools` using yum.
```
$ sudo yum install python3-tools
```

<small>Can't find your distribution? Create a new issue [here](https://github.com/bitwise-labs-app/c-python/issues/new).</small>