<template>
  <div class="lg:px-20">
    <h1 class="text-lg font-semibold heading-border border-b pb-3">Projects</h1>
    <div class="p-3 my-3 gradient-bg text-white flex justify-between gradient-bg items-center">
      <div class="text-sm mb-1 lg:mb-0 lg:text-xl">Lamborghini Aventado and Something</div>
      <font-awesome-icon class="mr-1 h-4 cursor-pointer text-white" :icon="['fas', 'trash']"/>
    </div>
    <table>
      <thead>
      <tr class="text-gray-800 h16">
        <th></th>
        <th class="text-left line">Products</th>
        <th class="text-left lg:text-center line">Color</th>
        <th class="text-left lg:text-center line">Price</th>
        <th class="text-left lg:text-center line">Quantity</th>
        <th class="text-left lg:text-center line">Cost</th>
        <th class="line"></th>
      </tr>
      </thead>
      <tbody>
        <tr class="" @click="details1 = !details1">
          <td class="checkbox"></td>
        <td class="product" >

          <div class="lg:flex">
            <div class="mr-2">
              <img src="~/static/images/Layercar.png">
            </div>
            <div class="my-auto">
                <span class="block font-semibold">
                  Lamborghini
                </span>
              <span class="block text-sm text-gray-500">
                  Electronics + Cover
                </span>
            </div>
          </div>
        </td>
        <td class="lg:text-center" >Red</td>
        <td class="lg:text-center" >
          <span class="font-semibold">$20,000</span>
        </td>
        <td class="lg:text-center" >
          <span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span>
        </td>
          <td class="font-semibold lg:text-center" ><font-awesome-icon class="mr-3 h-4 cursor-pointer" :icon="['fas', 'chevron-down']"/>$100,000</td>
        <td class="lg:text-right">
          <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
        </td>
      </tr>
        <tr v-if="details1" class="" >
          <td class="checkbox"></td>
          <td class="product" >

          </td>
          <td class="lg:text-center" ></td>
          <td class="lg:text-center" >
            <span class="font-semibold block ">Category</span>
            <span class="block mt-3">Electronics</span>
            <span class="block mt-3">Code</span>
          </td>
          <td class="lg:text-center" >
            <span class="font-semibold block">Manufacturer</span>
            <div class="block mt-3">PCB way, Cha...  <nuxt-link to="/user/add-service"><font-awesome-icon @click="addManufacturer" class="mr-3 h-4 cursor-pointer text-ideeza" :icon="['fas', 'pen']"/></nuxt-link></div>
            <div class="block mt-3">Flying car N3, L...  <nuxt-link to="/user/add-service"><font-awesome-icon class="mr-3 h-4 cursor-pointer text-ideeza" :icon="['fas', 'pen']"/></nuxt-link></div>
          </td>
          <td class="lg:text-center" >
            <span class="font-semibold block ">Price</span>
            <span class="block mt-3">$10,000</span>
            <span class="block mt-3">$5000</span>
          </td>
          <td class="lg:text-right">

          </td>
        </tr>
        <tr class="">
          <td class="checkbox"></td>
          <td class="product" >
            <div class="lg:flex">
              <div class="mr-2">
                <img src="~/static/images/Layercar.png">
              </div>
              <div class="my-auto">
                <span class="block font-semibold">
                  Audi
                </span>
                <span class="block text-sm text-gray-500">
                  Electronics + Cover
                </span>

              </div>
            </div>

          </td>
          <td class="lg:text-center" >Red</td>
          <td class="lg:text-center font-semibold" >$20,000</td>
          <td class="lg:text-center" ><span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span></td>
          <td class="font-semibold lg:text-center" ><font-awesome-icon class="mr-3 h-4 cursor-pointer" :icon="['fas', 'chevron-down']"/>$100,000</td>
          <td class="lg:text-right">
            <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
          </td>
        </tr>
      </tbody>

    </table>
    <div class="py-5 pr-5 text-right">
      Total: <span class="ml-3">$25000</span>
    </div>

    <div class="p-3 my-3 flex justify-between gradient-bg items-center text-white">
      <div class="text-sm mb-1 lg:mb-0 lg:text-xl">Washing machines</div>
      <font-awesome-icon class="mr-1 h-4 cursor-pointer text-white" :icon="['fas', 'trash']"/>
    </div>
    <table>
      <thead>
      <tr class="text-gray-800 h16">
        <th class="text-left ">Products</th>
        <th class="text-left lg:text-center">Color</th>
        <th class="text-left lg:text-center">Price</th>
        <th class="text-left lg:text-center">Quantity</th>
        <th class="text-left lg:text-center">Cost</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="">
        <td class="product" >
          <div class="lg:flex">
            <div class="mr-2">
              <img src="~/static/images/washing-machine.png">
            </div>
            <div class="my-auto">
                <span class="block font-semibold">
                  Bosh
                </span>
              <span class="block text-sm text-gray-500">
                  Electronics + Cover
                </span>

            </div>
          </div>

        </td>
        <td class="lg:text-center" >Silver</td>
        <td class="lg:text-center font-semibold" >$20,000</td>
        <td class="lg:text-center" ><span class="inline-block mr-3">-</span>1<span class="inline-block ml-3">+</span></td>
        <td class="font-semibold lg:text-center" ><font-awesome-icon class="mr-3 h-4 cursor-pointer" :icon="['fas', 'chevron-down']"/>$100,000</td>
        <td class="lg:text-right">
          <font-awesome-icon class="mr-1 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
        </td>
      </tr>

      </tbody>

    </table>
    <div class="py-5 pr-5 text-right">
      Total: <span class="ml-3">$25000</span>
    </div>

    <v-client-table ref="products_table" :data="tableData" :columns="columns" :options="options">
      <div class="flex items-center" slot="detail" slot-scope="props" >
        <div class="mr-2">
          <img src="~/static/images/Layercar.png">
        </div>
        <div class="my-auto">
                <span class="block font-semibold">
                  {{props.row.product.name}}
                </span>
          <span class="block text-sm text-gray-500 ">
                  {{props.row.product.detail}}
                </span>
        </div>
      </div>
      <span class="font-semibold" slot="price" slot-scope="props">{{props.row.price | currency}}</span>
      <span class="font-semibold" slot="cost" slot-scope="props">{{props.row.cost | currency}}</span>
      <div class="flex justify-end" slot="actions" slot-scope="props">
        <font-awesome-icon class="mr-2 h-4 cursor-pointer text-ideeza" :icon="['fas', 'trash']"/>
        <font-awesome-icon @click="$refs.products_table.toggleChildRow()" class="mr-2 h-4 cursor-pointer text-ideeza" :icon="['fas', 'pen']"/>
        <font-awesome-icon class="mr-2 h-4 cursor-pointer text-ideeza" :icon="['fas', 'plus']"/>
      </div>

      <template slot="child_row" scope="props">
        <div class="text-center font-semibold mb-3 flex justify-end p-5" >
          <h1 class="text-center font-semibold mb-3 w-32">Category</h1>
          <h1 class="text-center font-semibold mb-3 w-32">Manufacturers</h1>
          <h1 class="text-center font-semibold mb-3 w-32">Price</h1>
        </div>
        <div v-for="manufacturer in props.row.manufacturers" class="flex justify-end p-5">
          <div class="w-32 text-center">{{manufacturer.category}}</div>
          <div class="w-32 text-center">{{manufacturer.name}}</div>
          <div class="w-32 text-center">{{manufacturer.price | currency}}</div>

        </div>
      </template>

    </v-client-table>

    <Manufacturer @close="openManufacturer = false" v-if="openManufacturer" class="z-50" />
  </div>
</template>

<script>
    import Manufacturer from '~/components/user/cart/manufacturer.vue'
    export default {
      name: "cart",
      components: {
        Manufacturer
      },
      data: function() {
        return {
          details1: false,
          openManufacturer: false,
          columns: ['id', 'detail', 'color', 'price', 'quantity', 'cost', 'actions'],
          tableData: [
            {
              id: 1,
              product: {
                image: 'Layercar.png',
                name: 'Lamborghini',
                detail: 'Electronics + Cover'
              },
              color: 'Red',
              price: 20000,
              quantity: 1,
              cost: 10000,
              manufacturers: [
                {
                  id: 1,
                  category: 'Electronics',
                  name: 'PCB, Way',
                  price: 2000
                },
                {
                  id: 2,
                  category: 'Code',
                  name: 'The Other Way',
                  price: 4000
                }
              ]

            },
            {
              id: 2,
              product: {
                image: 'Layercar.png',
                name: 'Lamborghini',
                detail: 'Electronics + Cover'
              },
              color: 'Red',
              price: 20000,
              quantity: 1,
              cost: 10000,
              manufacturers: [
                {
                  id: 1,
                  category: 'Electronics',
                  name: 'PCB, Way',
                  price: 2000
                },
                {
                  id: 2,
                  category: 'Code',
                  name: 'The Other Way',
                  price: 4000
                }
              ]
            }
          ],
          options: {
            headings: {
              id: '',
              detail: 'Products',
              color: 'Color',
              price: 'Price',
              quantity: 'Quantity',
              cost: 'Cost',
              actions: ''
            },
            sortable: [],
            filterable: false,
            childRowTogglerFirst: false
          }
        }
      },
      mounted() {
        this.$store.commit('cartstepper/set', {position: 2})
      },
      methods: {
        addManufacturer () {

        }
      }
    }
</script>

<style scoped>

  /*Table*/

  /deep/ table{
      @apply mb-5 w-full table-auto border-collapse text-gray-600 mx-auto;

    }
  /deep/ thead tr th{
      @apply text-ideeza-black border-b-2 border-solid border-ideeza;
    }
  /deep/ thead tr th:first-child{
      @apply border-b-0;
    }
  /deep/ tr td:first-child{
      width: 50px;
      text-align: left;
    }
  /deep/ tr td:nth-child(2){
      width: 450px;
    text-align: left;
    }
  /deep/ tr td img{
      width: 180px;
    }
  /deep/ tbody td{
      @apply py-3 my-3 text-center;
    }
  /deep/ tbody td:last-child{
    @apply text-right;
  }
  /deep/ tbody tr:last-child td{
      @apply py-3 my-3;
    }

  /*    */

</style>
