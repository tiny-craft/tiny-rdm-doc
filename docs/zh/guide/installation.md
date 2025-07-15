# 安装使用

## Windows

### 手动下载安装

- 64位安装包请下载 `Setup windows_x64 (.exe)`，下载完成后双击安装即可。
- 64位便携版请下载 `Portable windows_x64 (.zip)`，下载完成后双击安装即可。
- ARM64位安装包请下载 `Setup windows_arm64 (.exe)`，下载完成后双击安装即可。
- ARM64位便携版请下载 `Portable windows_arm64 (.zip)`，下载完成后双击安装即可。

::: danger 故障排除

如运行提示需要安装Webview运行时，但是无法下载，可能需要自行下载安装[Webview2运行时](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)

:::

## macOS

### 手动下载安装

- 如果您使用 M1/M2/M3 芯片的 Mac，请下载 `mac_arm64 (.dmg)`
- 如果您使用 Intel 芯片的 Mac，请下载 `mac_intel (.dmg)`

下载完成之后打开 `.dmg` 文件，将 `Tiny RDM.app` 拖到 `Applications` 目录内即可。

::: danger 故障排除

- 由于应用没有签名，如果显示开发者无法验证：

点击`取消`按钮，并打开`设置 -> 隐私与安全性`页面，点击`仍要打开`按钮，最后在弹出窗口里点击`打开`按钮即可。

- 如果安装后提示 `“Tiny RDM”已损坏，无法打开` ，请打开 `Terminal.app` 并执行以下命令即可：

```bash
sudo xattr -d com.apple.quarantine /Applications/Tiny\ RDM.app
```

然后再次尝试打开`Tiny RDM`。

- 此外，`dmg`安装包内也包含了 `损坏修复` 脚本，可通过双击执行并输入管理员密码，快速修复以上问题

:::

## Linux

### 手动下载安装

- `deb`安装包选择下载 `linux_amd64.deb (.deb)`
- `AppImage`包选择下载 `linux_amd64.AppImage (.AppImage)`

`deb` 安装使用 `apt-get`
```bash
sudo apt-get install ./tiny_rdm_{version}_linux_amd64.deb
```

`AppImage`的使用
```bash
chmod u+x tiny_rdm_{version}_linux_amd64.AppImage
./tiny_rdm_{version}_linux_amd64.AppImage
```

::: danger 故障排除

在最新版本的 Webkit2Gtk (2.42.0) 中，由于 Nvidia 专有驱动未完全实现 DMABUF，将导致无法启动和崩溃的情况发生，如果遇到 段错误 或 Tiny RDM 无法启动的情况，请尝试在 /etc/environment （或者其他设置环境变量的地方）中加入 WEBKIT_DISABLE_DMABUF_RENDERER=1 环境变量关闭 DMABUF 的使用。

:::

## 代码编译

### 运行环境要求

* Go（最新版本）
* Node.js >= 20
* NPM >= 9

### 安装wails

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### 拉取代码

```bash
git clone https://github.com/tiny-craft/tiny-rdm --depth=1
```

### 构建前端代码

```bash
npm install --prefix ./frontend
```

### 编译运行开发版本

```bash
wails dev
```

### 编译安装包
```bash
wails build
```
