<template>
  <div class="body" :class="{ 'isDark': darkMode }">
        <div class="option">
            <label class="switch">
                <input type="checkbox" @click="darkMode = !darkMode">
                <span class="slider round"></span>
            </label>
        </div>
        <div class="content">
            <div class="input">
                <input type="text" v-model="list">
                <input type="submit" value="Add" @click="addData">
            </div>
            <table>
                <tr>
                    <th>No</th>
                    <th>To do</th>
                    <th>Status</th>
                </tr>
                <tr v-for="(todo,index) in sort(todos)">
                    <td>{{index+1}}</td>
                    <td style="text-align: left;">{{todo.list}}</td>
                    <td>
                        <input type="checkbox"
                            v-model="todo.status"
                            :checked="todo.status == true"
                            :disabled="todo.status == true">
                        {{todo.status == true ? ' Complete':' Not yet'}}
                    </td>
                </tr>
            </table>
        </div>
  </div>
</template>
  
<script>
import Toasted from 'vue-toasted';
import Vue from 'vue'

Vue.use(Toasted, {
  duration: 800,
  position: 'top-center',
  theme :"outline"
})
export default {
    data() {
    return {
        darkMode: false,
        row:[],
        list: '',
        av: true,
        todos:[
            {list : "Mencuci Baju",status : true},
            {list : "Memperbaiki Kipas",status : true},
            {list : "Makan siang",status : false},
            {list : "Latihan Sepak Bola",status : false}
        ]
        }
    }, 
    methods:{
        addData(){
            for(var index in this.todos) {
                if(this.todos[index].list == this.list) {
                    this.$toasted.show('Data Sudah tersimpan!')
                    return;
                }
            }
            this.todos.push({
                list : this.list,
                status  :  false,
            })
        },
        sort(arr) {
        return arr.slice().sort(function(a, b) {
        return a.status - b.status;
            });
        }
    }
};
</script>
<style>
.body {
    transition: background-color 300ms;
    min-height: 100vh;
}
.isDark {
    background-color: #333;
    color: white;
}
.body .content {
    padding: 10px;
    text-align: center;
}
.body .content .input{
    margin-bottom: 10px;   
}
.body .content .input input[type=text]{
    margin-bottom: 10px;
    width: 30%;
    padding: 6px 8px;
}
.body .content .input input[type=submit]{
    margin-left: 6px;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 6px 8px;
    background-color: #0078d7;
    border: solid #0078d7;
}
.body .content .input input:focus{
    outline: none;
}
.body .content table{
    margin: 0 auto;
    box-shadow: 0px 0px 2px 0px black;
    width: 40%;
}
.body .content table,
.body .content table tr,
.body .content table tr td,
.body .content table tr th{
    border-collapse: collapse;
}
.body .content table tr th,
.body .content table tr td{
    background-color: rgba(184, 182, 182, 0.356);
}
.body .content table tr td{
    padding: 6px;
    border-bottom: 1px solid grey;
}
.body .content table tr th{
    
    border-bottom: 4px solid #03A9F4;
    background-color: #0078d7;
    padding: 8px 6px;
    color: white;
}
/* toogle switch */
.switch {
  position: relative;
  left: 6px;
  top : -36px;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(53, 51, 51);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left:4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color:#03A9F4;
}

input:focus + .slider {
  box-shadow: 0 0 1px #03A9F4;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>