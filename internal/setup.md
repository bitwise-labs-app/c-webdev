---
name: Get ready to develop!
---

Web Development is fairly easy, so easy that there's no real system requirements, all you need is a modern web browser, however it is suggested to use the VS Code Desktop app.
    <details>
        <summary>Install VS Code as a Desktop App</summary>
        Pick your operating system:
        <details>
            <summary>Windows</summary>
            <ol>
                <li>Download Visual Studio Code from <a href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user">This link</a> or the Microsoft store<br>
                <i>-- If installing from MS Store, you're done. --</i></li>
                <li>Click the downloaded EXE file (don't worry it's not a virus)</li>
                <li>Allow administrator permissions, and let it install.</li>
            </ol>
        </details>
        <details>
            <summary>Mac OS X</summary>
            <i>Full disclosure, i'm not a Mac user so i'm unable to check if this tutorial is functional.</i>
            <b>Install on Mac OS X</b>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w0xBQHKjoGo?si=zTsKHVdmAiiBDcBJ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </details>
        <details>
            <summary>Debian/Ubuntu Linux</summary>
            <ol>
                <li>Download the <pre>.deb </pre> file from <a href="https://go.microsoft.com/fwlink/?LinkID=760868">here</a>
                <br>
                <div class="alert alert-primary">
                    Make sure to download to the "Downloads" folder in your home/user directory
                </div></li>
                <li>Open a terminal</li>
                <li>Type <pre>bash </pre> and hit <kbd>enter</kbd> <div class="alert alert-primary">It's ok if nothing happens, this step is just to ensure everything will work correctly</div></li>
                <li>Type <pre>cd ~/Downloads </pre> and hit <kbd>enter</kbd></li>
                <li>Now type <pre>sudo apt install -y ./code</pre> and hit <kbd>tab</kbd>, it should autofill the name of the file you just downloaded, if not, enter the name of the downloaded file, ensuring it matches exactly, including the <pre>./</pre> preceeding.</li>
                <li>now, hit enter and type your password when asked</li>
                <li>You can now find Visual Studio Code in your app menu.</li>
            </ol>
        </details>
        <details>
            <summary>Arch Linux</summary>
            You're an arch user, so i'm just gonna cut to the chase as I trust you know what you're doing
            <div class="alert alert-danger">
                Just, whatever you do, do <b>NOT</b> install <u>codium</u> or <u>code-oss</u> or packages with similar names, as Codium and OSS are missing plugins.
            </div>
            <div class="alert alert-primary">You'll need an AUR Helper to continue, we reccomend <a href="https://itsfoss.com/install-yay-arch-linux/">Yay</a></div>
            <ol><li>
                Install either of the following from the AUR: <pre>visual-studio-code</pre> or if you want to <i>"live on the edge" (use beta/possibly unstable software)</i> you can install <pre>visual-studio-code-insiders-bin</pre>
            </li>
            <li>Now you can find VS Code in your applications menu of choice.</li>
            </ol>
        </details>
        <details>
            <summary>Fedora Linux</summary>
            I don't use fedora, so here's some instructions I stole from the itsfoss website.
            <ol>
                <li>Run <pre> sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc</pre></li>
                <li>Run <pre> sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'</pre></li>
                <li>Run <pre> dnf check-update</pre></li>
                <li>Run <pre> sudo dnf install code</pre></li>
            </ol>
            <small><i>full steps at: <a href="https://itsfoss.com/install-vs-code-fedora/#method-2-vs-code-in-native-rpm-package">https://itsfoss.com/install-vs-code-fedora/#method-2-vs-code-in-native-rpm-package</a></i></small>
        </details>
    </details>
    If you have a chromebook or a machine provided by an educational institute/buisiness, you might not be able to install an application, so you'll be using VSCode in the browser, all this takes is opening <a href="https://vscode.dev">https://vscode.dev</a>
    <div class="alert alert-primary">On compatible browsers you can make VSCode run like an app! All you need to do is press the button on the right hand side of the URL Bar that looks like a computer with an arrow, and press install.</div>
    <div class="alert alert-danger">VSCode in the web is missing core features!</div>
    <b>Choose your installation method</b>
    <i>Choosing the correct one allows the course to give you the correct instructions.</i>
    <select name="" id="">
        <option value="" default disabled>Choose your installation</option>
        <option value="">Web Application</option>
        <option value="">Desktop Application</option>
    </select><button>Save</button>