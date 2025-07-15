# Installation

## Windows

### Install Manually

- For 64-bit installation package, please download `Setup windows_x64 (.exe)`, and double-click to install after downloading.
- For 64-bit portable edition, please download `Portable windows_x64 (.zip)`, and double-click to install after downloading.
- For ARM64 installation package, please download `Setup windows_arm64 (.exe)`, and double-click to install after downloading.
- For ARM64 portable edition, please download `Portable windows_arm64 (.zip)`, and double-click to install after downloading.

::: danger Troubleshooting

If you receive a prompt that you need to install the Webview runtime, but you cannot download it, you may need to download and install the [Webview2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) manually.

:::

## macOS

### Install Manually

- If you are using a Mac with M1/M2/M3 chip, please download `mac_arm64 (.dmg)`
- If you are using a Mac with Intel chip, please download `mac_intel (.dmg)`

After downloading, open the `.dmg` file and drag `Tiny RDM.app` into the `Applications` folder.

::: danger Troubleshooting

- Since the app is not signed, shows "The developer cannot be verified":

Click the `Cancel` button, then go to `Settings -> Privacy & Security` page, click the `Still Open` button, and then click the `Open` button in the pop-up window.

- If you get a pop-up such as "Broken files" after installation, please open `Terminal.app` and execute the following command:

```bash
sudo xattr -d com.apple.quarantine /Applications/Tiny\ RDM.app
```

Then try reopen `Tiny RDM`.

- Additionally, the `dmg` installation package also includes a `Repair` script, which you can double-click to execute and enter the administrator password to quickly fix the above issues.

:::

## Linux

### Install Manually

- For `deb` installation package, download `linux_amd64.deb (.deb)`
- For `AppImage` package, download `linux_amd64.AppImage (.AppImage)`

Install `deb` package using `apt-get`:
```bash
sudo apt-get install ./tiny_rdm_{version}_linux_amd64.deb
```

Use `AppImage`:
```bash
chmod u+x tiny_rdm_{version}_linux_amd64.AppImage
./tiny_rdm_{version}_linux_amd64.AppImage
```

::: danger Troubleshooting

In the latest version of [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0), due to incomplete implementation of DMABUF by Nvidia proprietary drivers, there may be issues with startup failure and crashes. If you encounter a "Segmentation fault" or Pot fails to start, please try adding the environment variable `WEBKIT_DISABLE_DMABUF_RENDERER=1` in `/etc/environment` (or any other place where environment variables can be set) to disable the use of DMABUF.
:::

## Build Guidelines

### Prerequisites

* Go (latest version)
* Node.js >= 20
* NPM >= 9

### Install wails

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### Pull the Code

```bash
git clone https://github.com/tiny-craft/tiny-rdm --depth=1
```

### Build Frontend

```bash
npm install --prefix ./frontend
```

### Compile and Run

```bash
wails dev
```

### Build Installation Package

```bash
wails build
```
