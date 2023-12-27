# frontend

## 開発環境の作成時

### フォルダが空の時に実行したコマンド

```
yarn create vite
yarn create v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-vite@5.1.0" with binaries:
      - create-vite
      - cva
✔ Project name: … frontend
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

vite に host のオプションを設定する

```
export default defineConfig({
  server: {
    host: true,
  },
...
```

### yarn add

```
#-- three js
yarn add three @react-three/drei @react-three/fiber
yarn add -D @types/three

#-- cannon
yarn add @react-three/cannon
```

## 開発方法

開発環境を立ち上げる方法

```
docker compose up -d
docker compose exec frontend sh
cd frontend
yarn
yarn dev
```

開発環境を終了するとき

```
docker compose down
```

# backend
