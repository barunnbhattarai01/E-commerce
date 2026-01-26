# 🛒 Sasto Pasal

**Sasto Pasal** is a modern e‑commerce web application focused on simplicity, performance, and smooth user experience. It is built with **React** and uses a powerful stack including **Firebase**, **Cloudinary**, **TanStack Query**, **GSAP**, and **Context API**.

---

## 🚀 Tech Stack

* **Frontend:** React
* **Authentication:** Firebase Authentication
* **Database:** Firebase (Firestore / Realtime Database)
* **Image Storage:** Cloudinary
* **State Management:** React Context API
* **Data Fetching & Caching:** TanStack Query (React Query)
* **Animations:** GSAP (GreenSock Animation Platform)

---

## ✨ Features

* 🔐 Secure user authentication (Login / Signup)
* 🛍️ Product listing and details
* 🖼️ Image upload and optimization using Cloudinary
* ⚡ Fast data fetching with caching & background updates
* 🎞️ Smooth and modern animations with GSAP
* 🌐 Global state management using Context API
* 📱 Responsive UI

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/sasto-pasal.git
cd sasto-pasal
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

---

## ▶️ Run the Project

```bash
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

## 🔐 Authentication

* Implemented using **Firebase Authentication**
* Supports email & password authentication
* Auth state is managed globally using **Context API**

---

## 📦 Data Fetching & Caching

* **TanStack Query** is used for:

  * API calls
  * Caching server data
  * Automatic refetching
  * Loading & error states

---

## 🎨 Animations

* **GSAP** is used for:

  * Page transitions
  * Component entrance animations
  * Smooth UI interactions

---

## 🖼️ Image Handling

* Images are uploaded and stored using **Cloudinary**
* Optimized image delivery for better performance

---

## 🌍 Global State Management

* **React Context API** is used for:

  * User authentication state
  * Cart / app-level state

---

## 🛠️ Future Improvements

* 🧾 Order & payment integration
* ⭐ Product reviews & ratings
* 🛒 Advanced cart & checkout
* 🧑‍💼 Admin dashboard

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Barunn Bhattarai**
Built with ❤️ using React & Firebase
