# Memo-UI playground — Next.js, port 3000
FROM node:24-bookworm-slim AS build
WORKDIR /app
RUN npm i -g pnpm@10.14.0
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/playground/package.json apps/playground/
COPY packages/core/package.json packages/core/
COPY packages/motion/package.json packages/motion/
COPY packages/react/package.json packages/react/
COPY packages/utils/package.json packages/utils/
RUN pnpm install --frozen-lockfile --config.onlyBuiltDependencies="[rolldown,esbuild,@rolldown/binding-linux-x64-gnu]" --config.strict-dep-builds=false
COPY . .
RUN pnpm --filter @memo-ui/utils build && pnpm --filter @memo-ui/core build && pnpm --filter @memo-ui/motion build && pnpm --filter @memo-ui/react build && pnpm --filter @memo-ui/playground build

FROM node:24-bookworm-slim AS run
WORKDIR /app
ENV NODE_ENV=production
RUN npm i -g pnpm@10.14.0
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps ./apps
COPY --from=build /app/packages ./packages
COPY --from=build /app/package.json ./package.json
WORKDIR /app/apps/playground
EXPOSE 3000
CMD ["pnpm", "start"]
