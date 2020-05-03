<template>
    <h1 data-testid="hello-world-title">
        Hello world! This is your first component tested by {{ cypress }}
    </h1>
</template>
<script>
export default {
  data: () => ({
    cypress: 'Cypress',
  }),
};
</script>
