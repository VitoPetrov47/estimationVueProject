<template>
  <div class="wrapper-main">
    <div class="container-custom-L">
      <section class="section-block card-section">
        <h1 class="card-title">Constructor</h1>
        <div class="card-content-main">
          <div>
            <input class="input-type input-style-custom" v-model="textInput" placeholder="Type something">
            <button style="margin-left: 20px" id="add-btn" class="btn" @click="addNewContent">+ Add Item</button>
          </div>

          <div class="content" style="width: 100%">
            <Draggable
                v-model="tree"
                :options="dragOptions"
                group="people"
                item-key="id"
            >
              <template #item="{ element }">
                <div class="item-main" :class="'item-' + element.id">
                  <div class="item-content">
                    <div class="item-content-main">
                      <div>
                        <p style="margin-right: 10px">{{element.id + 1}}. {{ element.content }}</p>
                      </div>
                      <div>
                        <input class="item-input input-style-custom"
                               :data-target="'item-input-' + element.id"
                               v-model="textParagraphInput['item-input-' + element.id]"
                               placeholder="type text: ">
                        <button style="margin-left: 20px" class="btn item-btn" :data-target="'item-btn-' + element.id" @click="addParagraph(element.id)">+ add under-item</button>
                        <button style="margin-left: 20px" class="btn btn-danger" @click="parentDelete(element.id)">Delete</button>
                      </div>
                    </div>
                    <div>
                      <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.876 14.6924H1.74933C1.64295 14.6924 1.58217 14.6924 1.50618 14.7076C1.27823 14.738 1.08068 14.8747 0.959105 15.0571C0.852728 15.2395 0.807138 15.4674 0.867925 15.6954C0.959105 16.0449 1.27823 16.2576 1.71894 16.2576H19.0431C19.2711 16.2424 19.4687 16.1361 19.6054 15.9689C19.7574 15.7865 19.803 15.5586 19.7574 15.3306C19.6966 14.7684 19.1799 14.6924 18.876 14.6924Z" fill="#636363" stroke="white" stroke-width="0.25" stroke-miterlimit="10"/>
                        <path d="M18.7695 11.2879C18.8759 11.2879 18.9671 11.2879 19.0431 11.2727C19.3926 11.2271 19.6661 10.9992 19.7269 10.6952C19.7877 10.4369 19.7421 10.2089 19.5901 10.0114L19.5749 9.9962C19.4686 9.82903 19.2254 9.72266 18.9519 9.72266H1.53649C1.20216 9.73785 0.913426 9.981 0.837443 10.3001C0.746263 10.6648 0.883033 11.0144 1.17177 11.1511C1.35413 11.2423 1.59728 11.2879 1.81003 11.2879C6.76415 11.3031 11.7639 11.3031 16.642 11.2879H18.7695Z" fill="#636363" stroke="white" stroke-width="0.25" stroke-miterlimit="10"/>
                        <path d="M10.3049 23.0955L9.98581 22.7764C9.81865 22.5941 9.65149 22.4269 9.48432 22.2597L9.42353 22.1989C9.05881 21.819 8.72449 21.4695 8.35977 21.12C8.17741 20.9376 7.96465 20.9072 7.82788 20.9072C7.61513 20.9072 7.43277 20.9832 7.26561 21.1504C7.11364 21.3023 7.03766 21.4847 7.02246 21.6975C7.02246 21.895 7.09844 22.0926 7.25041 22.2293C8.04064 23.05 8.87645 23.8858 9.80345 24.7824C10.0922 25.0559 10.5177 25.0711 10.7912 24.828L10.9584 24.6608C11.7182 23.9314 12.5844 23.0955 13.4203 22.1837C13.5874 22.0014 13.6482 21.7582 13.5874 21.5151C13.4659 21.2112 13.2379 20.9984 12.9644 20.9376C12.6756 20.8616 12.4325 20.9376 12.1893 21.1808L10.3049 23.0955Z" fill="#636363" stroke="white" stroke-width="0.25" stroke-miterlimit="10"/>
                        <path d="M13.6028 4.29768C13.618 4.10012 13.542 3.91776 13.4052 3.78099C12.463 2.8236 11.6272 1.98778 10.8066 1.19756C10.6698 1.06079 10.4875 1 10.3051 1C10.138 1 9.97079 1.06079 9.83402 1.18236C8.96781 2.01818 8.05601 2.89958 7.1898 3.82658C7.02264 4.00894 6.96185 4.25209 7.03784 4.48004C7.11382 4.75358 7.34177 4.96633 7.60011 5.04232C7.91924 5.1183 8.14719 5.04232 8.40554 4.79917C8.77026 4.44964 9.10458 4.10012 9.46931 3.7202L9.4845 3.70501L10.2899 2.88439L10.8826 3.49225C11.0802 3.68981 11.2625 3.87217 11.4449 4.06973L11.612 4.23689C11.84 4.48004 12.0375 4.6776 12.2351 4.85996C12.5542 5.16389 13.0101 5.14869 13.3141 4.84476C13.5116 4.69279 13.6028 4.49523 13.6028 4.29768Z" fill="#636363" stroke="white" stroke-width="0.25" stroke-miterlimit="10"/>
                      </svg>
                    </div>
                  </div>
                  <div v-for="paragraph in element.paragraph" :key="paragraph.id">
                    <div class="item-child" :class="'item-child-' + paragraph.id">
                      <div class="item-child-tools">
                        <ul>
                          <li>{{ paragraph.content }}</li>
                        </ul>
                        <div>
                          <input class="item-child-input input-style-custom"
                                 :data-target="'item-child-input-' + element.id + '-' + paragraph.id"
                                 v-model="textChildInput['item-child-input-' + element.id + '-' + paragraph.id]"
                                 placeholder="type text: ">
                          <button style="margin-left: 20px" class="btn item-child-btn" :data-target="'item-child-btn-' + element.id + '-' + paragraph.id" @click="addChildParagraph(element.id, paragraph.id)">+ add under-child-item</button>
                          <button style="margin-left: 20px" class="btn btn-danger" @click="paragraphDelete(element.id, paragraph.id)">Delete</button>
                        </div>
                      </div>
                      <div v-for="childParagraph in paragraph.child_paragraph" :key="childParagraph.id">
                        <div class="item-child-paragraph">
                          <div style="margin-right: 20px">- {{ childParagraph.content }}</div>
                          <button class="btn btn-danger" @click="childrenDelete(element.id, paragraph.id, childParagraph.id)">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </Draggable>
          </div>
        </div>
      </section>

      <footer class="footer-info-main">
        <button class="btn footer-save-next-btn" @click="submitConstructor">Save and Next</button>
        <label class="footer-step-text">Next step: Review</label>
      </footer>
    </div>
  </div>
</template>

<script>
import {ref, computed, onMounted, onBeforeMount} from 'vue';
import {useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import {useStore} from "vuex";
import Draggable from 'vuedraggable';

export default {
  name: "InfoAttributes",
  components: {
    Draggable
  },

  setup() {
    const route = useRoute();
    const router = useRouter();

    let clientInfo = ref({});
    let projectInfo = ref({});
    let attributesInfo = ref({});

    onMounted(() => {
      clientInfo.value = {
        clientName: route.query.clientName || '',
        clientNickname: route.query.clientNickname || '',
        PM: route.query.PM || '',
        milestone: route.query.milestone || '',
      };

      projectInfo.value = {
        description: route.query.description || '',
        type: route.query.type || '',
        platform: route.query.platform || '',
      };

      attributesInfo.value = {
        authorization: route.query.Authorization || '',
        dashboard: route.query.Dashboard || '',
        profile: route.query.Profile || '',
        publish: route.query.Publish || '',
        subscribe: route.query.Subscribe || '',
        referral: route.query.Referral || '',
        payment: route.query.Payment || '',
        balance: route.query.Balance || '',
      }

      console.log('clientInfo: ', clientInfo);
      console.log('projectInfo: ', projectInfo);
      console.log('AttributionsInfo: ', attributesInfo.value);
    });

    const submitConstructor = async () => {
      console.log('review');

      console.log('clientInfo: ', clientInfo);
      console.log('projectInfo: ', projectInfo);
      console.log('AttributionsInfo: ', attributesInfo.value);

      const constructorInfo = {
        estTree: tree
      }

      console.log('constructorInfo: ', constructorInfo);

      try {
        await router.push({
          path: '/createEst/infoReview',
          query: {
            clientName: clientInfo.value.clientName,
            clientNickname: clientInfo.value.clientNickname,
            PM: clientInfo.value.PM,
            milestone: clientInfo.value.milestone,
            description: projectInfo.value.description,
            type: projectInfo.value.type,
            platform: projectInfo.value.platform,
            authorization: attributesInfo.value.authorization,
            dashboard: attributesInfo.value.dashboard,
            profile: attributesInfo.value.profile,
            publish: attributesInfo.value.publish,
            subscribe: attributesInfo.value.subscribe,
            referral: attributesInfo.value.referral,
            payment: attributesInfo.value.payment,
            balance: attributesInfo.value.balance,
            estTree: JSON.stringify(constructorInfo.estTree)
          }
        })
      } catch (e) {
        console.log(e);
      }
    }

    /*script*/
    const textInput = ref('');
    const textParagraphInput = ref({});
    const textChildInput = ref({});
    const tree = ref([]);
    const drag = ref(true);

    const dragOptions = {
      animation: 200, // скорость анимации перетаскивания
    };

    function addNewContent() {
      let id = 0;
      if (tree.value.length > 0) {
        const lastItem = tree.value[tree.value.length - 1];
        if (lastItem.id >= 0) {
          id = lastItem.id + 1;
        }
      }

      const item = {
        id: id,
        content: textInput.value,
        parent_id: id,
        paragraph: []
      };

      tree.value.push(item);

      console.log('id:', id);
      console.log('arr:', tree.value);

      textInput.value = '';
    }

    function addParagraph(id) {
      const inputValue = textParagraphInput.value[`item-input-${id}`];
      console.log('Input Value:', inputValue);

      const element = tree.value.find(item => item.id === id);

      if (!element.paragraph) {
        element.paragraph = [];
      }

      const uniqueId = element.paragraph.length;
      element.paragraph.push({
        id: uniqueId,
        content: inputValue
      });

      console.log('arr:', tree.value);
      textParagraphInput.value[`item-input-${id}`] = '';
    }

    function addChildParagraph(id, uniqueId) {
      const inputChildValue = textChildInput.value[`item-child-input-${id}-${uniqueId}`];
      console.log('Input Value:', inputChildValue);

      const elementChild = tree.value.find(item => item.id === id);
      const foundItem = elementChild.paragraph.find(paragraphItem => paragraphItem.id === uniqueId);

      if (!foundItem.child_paragraph) {
        foundItem.child_paragraph = [];
      }

      const uniqueChildId = foundItem.child_paragraph.length;
      foundItem.child_paragraph.push({
        id: uniqueChildId,
        content: inputChildValue
      });
      textChildInput.value[`item-child-input-${id}-${uniqueId}`] = '';
    }

    const parentDelete = (id) => {
      const indexToDelete = tree.value.findIndex(item => item.id === id);

      if (indexToDelete !== -1) {
        tree.value.splice(indexToDelete, 1);
      }

      console.log('id:', id);
      console.log('arr:', tree.value);
    }

    const paragraphDelete = (parentId, id) => {
      const parentElement = tree.value.find(item => item.id === parentId);

      if (parentElement && parentElement.paragraph) {
        const indexToDelete = parentElement.paragraph.findIndex(item => item.id === id);

        if (indexToDelete !== -1) {
          parentElement.paragraph.splice(indexToDelete, 1);
        }
      }
    }

    const childrenDelete = (parentId, paragraphId, id) => {
      const parentElement = tree.value.find(item => item.id === parentId);

      if (parentElement && parentElement.paragraph) {
        const paragraphElement = parentElement.paragraph.find(paragraphItem => paragraphItem.id === paragraphId);

        if (paragraphElement && paragraphElement.child_paragraph) {
          const indexToDelete = paragraphElement.child_paragraph.findIndex(childItem => childItem.id === id);

          if (indexToDelete !== -1) {
            // Удалить childrenElement из массива child_paragraph
            paragraphElement.child_paragraph.splice(indexToDelete, 1);
          }
        }
      }
    }

    return {
      textInput,
      textParagraphInput,
      textChildInput,
      tree,
      addNewContent,
      addParagraph,
      addChildParagraph,
      drag,
      dragOptions,
      submitConstructor,
      parentDelete,
      paragraphDelete,
      childrenDelete
    };
  },
};
</script>

<style scoped>
.checked-option {
  margin-right: 10px;
}
/*card*/
.card-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.card-title {
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: black;

  margin-bottom: 30px;
}
.card-content-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 30px;
}
.card-text {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color:  black;

  margin-bottom: 10px;
}
/*footer*/
.footer-info-main {
  display: flex;
  justify-content: left;
  align-items: center;

  margin-top: 20px;
}
.footer-save-next-btn {
  border: 0;
  outline: none;
  border-radius: 10px;
  padding: 10px 12px;
  background: var(--main-bg-color);

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #000000;
  margin-right: 30px;
  cursor: pointer;

  transition: all .3s;
}
.footer-save-next-btn:hover {
  background: var(--main-bg-hover-color);
}
.footer-step-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #636363;
}

/*custom select*/
.custom-select {
  position: relative;
}

.search-option {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.search-option svg {
  width: 40px;
  height: 40px;

  transform: scale(.6);
}
.input-style-custom-select {
  border-radius: 0;
  border: 0;
  width: 190px;
  padding: 8px 0;
}
.input-style-custom-select:focus {
  border: 0;
  box-shadow: none;
}
.btn-custom-selector {
  width: 300px;
  border-radius: 4px;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: black;
}
.item-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin: 10px 0px;
  border-radius: 10px;
  border: 1px solid gainsboro;
}
.item-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-content-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.item-child div {
  margin-left: 20px;
}
.item-child-tools {
  display: flex;
  justify-content: left;
  align-items: center;
}
.item-child-paragraph {
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>