# Mobil Programlama - Lab 11: Tercihler ve Kimlik Doğrulama Uygulaması

**Öğrenci Adı:** Arda Adar  
**Öğrenci Numarası:** 220404013

## Proje Hakkında

Bu proje, Mobil Programlama dersi kapsamında **State Yönetimi**, **Context API** ve **Yerel Kalıcılık (Local Persistence)** konularını pekiştirmek amacıyla geliştirilmiştir. Uygulama, kullanıcı giriş/çıkış işlemlerini ve tema tercihlerini cihaz hafızasında (AsyncStorage) saklayan çok ekranlı bir React Native uygulamasıdır.

## Özellikler

* **Kimlik Doğrulama (Authentication):**
    * Kullanıcı adı ile giriş yapma.
    * Context API kullanılarak global kullanıcı yönetimi.
    * `AsyncStorage` ile oturumun kalıcı olması (Uygulama kapatılıp açılsa bile oturum açık kalır).
* **Tema Yönetimi:**
    * Açık (Light) ve Koyu (Dark) mod desteği.
    * `Custom Hook` (`useTheme`) kullanılarak tema mantığının ayrıştırılması.
    * Tema tercihinin kalıcı olarak saklanması.
* **Navigasyon:**
    * React Navigation (Native Stack) ile sayfalar arası geçiş.
    * Login, Home ve Settings ekranları.

## Kullanılan Teknolojiler

* React Native (Expo)
* React Navigation (Stack)
* Context API
* AsyncStorage
* Custom Hooks

## Kurulum Talimatları

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [REPO_LINKINIZ]
    cd PreferencesApp
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Uygulamayı Başlatın:**
    ```bash
    npx expo start
    ```

## Proje Yapısı

```text
PreferencesApp/
├── context/
│   └── AuthContext.js    # Kimlik doğrulama state yönetimi (Context API)
├── hooks/
│   └── useTheme.js       # Tema yönetimi ve kalıcılık (Custom Hook)
├── screens/
│   ├── LoginScreen.js    # Giriş ekranı
│   ├── HomeScreen.js     # Ana ekran
│   └── SettingsScreen.js # Ayarlar ve tema değişimi
├── App.js                # Navigasyon ve Provider sarmalaması
└── package.json
