# 🛍️ Product Shop — modularny frontend sklepowy

Aplikacja frontendowa typu **Product Shop** zbudowana w oparciu o **feature-first architecture**. Zawiera wyszukiwarkę produktów z debounce, widoki listy, integrację z API oraz modularną strukturę folderów ułatwiającą rozwój i utrzymanie.

---

## 📁 Struktura folderów

```
src/
├── assets/           // Statyczne zasoby (ikony, obrazy, fonty)
├── components/ui/    // Reużywalne komponenty UI
├── context/          // Globalny stan (np. SearchContext)
├── features/
│   └── products/
│       ├── components/  // Widoki i komponenty związane z produktami
│       ├── hooks/       // Hooki specyficzne dla produktów
│       ├── services/    // API dla produktów
│       └── types/       // Typy związane z produktami
├── hooks/            // Globalne hooki (useDebounce, useSearch)
├── layout/           // Wrapper layoutu aplikacji
├── lib/              // Konfiguracje (axios, queryClient)
├── providers/        // Providerzy projektu (np. QueryProvider)
├── styles/           // SCSS: zmienne, mixiny, reset
├── App.tsx           // Logika główna aplikacji
└── main.tsx          // Punkt wejścia
```

## ✨ Główne cechy

```
- 🔍 Wyszukiwanie produktów z debounce
- 🧩 Modularna struktura kodu (feature-first)
- ⚛️ React + TypeScript + React Query
- 🎨 SCSS z resetem, zmiennymi i mixinami
- 📦 Reużywalne komponenty UI
```

## 🚀 Uruchomienie lokalne

```bash
npm install
npm run dev
```
