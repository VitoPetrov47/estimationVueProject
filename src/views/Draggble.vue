<template>
  <div>
    <Draggable
        v-model="myArray"
        :options="dragOptions"
        group="people"
        item-key="id"
    >
      <template #item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </Draggable>
  </div>
</template>

<script>
import { ref } from 'vue';
import Draggable from 'vuedraggable';

export default {
  components: {
    Draggable,
  },
  setup() {
    const myArray = ref([
      {
        id: 1,
        name: 'Card 1',
      },
      {
        id: 2,
        name: 'Card 2',
      },
      {
        id: 3,
        name: 'Card 3',
      },
    ]);

    const drag = ref(true); // Установите true, чтобы сделать элементы перетаскиваемыми

    const dragOptions = {
      animation: 200, // скорость анимации перетаскивания
    };

    return {
      drag,
      dragOptions,
      myArray,
    };
  },
};
</script>

<style scoped>
</style>