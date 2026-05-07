<template>
  <div class="relative flex min-h-screen flex-col bg-background">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
