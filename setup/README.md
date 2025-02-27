# Setup instructions

You will find the instructions to set up your computer for your next React Native Bootcamp.

💡 I do provide advice for Linux and macOS.
💡 Being an **administrator on windows is mandatory**, I am **not responsible** if you encounter issues.
(_You can follow this [setup tutorial from InfiniteRed](https://academy.infinite.red/p/installing-react-native-tutorial-on-windows-10/) to make everything work_).

## System Requirements

- [ ] [git](https://git-scm.com/) v2.13 or greater
- [ ] [Node.js](https://nodejs.org/) v16 or greater
- [ ] [yarn](https://yarnpkg.com/getting-started/install)

Use the following command from your terminal to check your Node version.

```console
node --version
```

If you have a recent version installed, it should do.

## Virtual Simulators

<details>
<summary>macOS</summary>

- [ ] [Xcode 12](https://apps.apple.com/fr/app/xcode/id497799835?mt=12) for macOS

Check if everything is working.

```console
xcode-select --install
```

To accept terms and conditions

```console
xcode-select -p
```

Should output something like `/Applications/Xcode.app/Contents/Developer` if it's not the case run `sudo xcode-select --reset`

- [ ] [Android Studio](https://developer.android.com/studio) with API levels 21+

</details>

<details>
<summary>Linux</summary>

- [ ] [Android Studio](https://developer.android.com/studio) with API levels 21+

</details>

<details>
<summary>Windows</summary>

- [ ] [Android Studio](https://developer.android.com/studio) with API levels 21+

</details>

## Smartphone Requirements

- [ ] Create an account [https://expo.dev/signup](https://expo.dev/signup)
- [ ] Download **Expo GO** on your smartphone
- [ ] Log in with your Expo account on your smartphone ( On the top right )

You are going to follow a **Native Mobile Application Bootcamp**.

`iOS` phones are the easiest way, Android is nice too BUT there are more issues. You need a decent smartphone to enjoy a fast experience.

## Text Editor

- [ ] Download and install [Visual Studio Code](https://code.visualstudio.com/)

<details>
<summary>macOS</summary>

```console
brew install --cask visual-studio-code
```

</details>

<details>
<summary>Linux</summary>

```console
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
```

</details>
