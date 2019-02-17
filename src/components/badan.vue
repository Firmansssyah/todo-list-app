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
                <input type="text" v-model="newlist" v-on:keyup.enter="actionList" placeholder="add to-do here">
                <input type="submit" value="Simpan" @click="actionList">
            </div>
            <div class="info">
                To-do complete : {{todoCompleted}}
            </div>
            <table>
                <tr>
                    <th>No</th>
                    <th>To do</th>
                    <th>Status</th>
                </tr>
                <tr v-for="(todo,index) in todos" :key="index" :class="{ 'complete': todo.status}">
                    <td>{{index+1}}</td>
                    <td style="text-align: left;" @click='editList(index)'>{{todo.list}}</td>
                    <td>
                        <input type='checkbox'
                            v-model='todo.status'
                            :checked='todo.status == true'
                            :disabled='todo.status == true'>
                        {{todo.status == true ? ' Complete':' Not yet'}}
                        <font-awesome-icon icon='trash' @click='delList(index)'/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
    return {
        darkMode: false,        
        newlist: '',
        selected_id: false,
        todos:[
            {list : "Mencuci Baju",status : true},
            {list : "Memperbaiki Kipas",status : true},
            {list : "Makan siang",status : false},
            {list : "Latihan Sepak Bola",status : false}
        ]}
    }, 
    methods:{
        actionList() {
            if(this.selected_id === false) { // maka tambah
                for(var index in this.todos) {
                    if(this.todos[index].list == this.newlist) {
                        this.$toasted.show(this.newlist + ' sudah ada !')
                        return;
                    }else if(this.newlist == ''){
                        this.$toasted.show('Isi woy !')
                        return;
                    }
                }
                this.$toasted.show(this.newlist +' berhasil ditambahkan!')
                this.todos.push({
                    list : this.newlist,
                    status  :  false,
                })
            } else {
                this.todos[this.selected_id].list = this.newlist;
            }
            this.newlist = '';
        },
        delList(index) {
            this.todos.splice(index, 1);
        },
        editList(index) {
            this.newlist = this.todos[index].list;
            this.selected_id = index;
        },
        sort(arr) {
            return arr.slice().sort(function(a, b) {
            return a.status - b.status;
            });
        }
    },
    computed: {
        todoCompleted() {
            let jumlah = 0;
            for(var i in this.todos) {
                if(this.todos[i].status) jumlah++;
            }
            return jumlah
        }
    }
};
</script>
<style>
.body {
    transition: background-color 300s;
    min-height: 94vh;
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
.body .content .info{
    padding-bottom: 10px;
}
.body .content table{
    margin: 0 auto;
    box-shadow: 0px 0px 2px 0px black;
    width: 90%;
    border-collapse: collapse;
}
.body .content table tr:hover{
    cursor: pointer;
    background-color: rgba(182, 182, 182, 0.356);
}
.body .content table tr td{
    padding: 6px;
    border-bottom: 1px solid grey;
}
.complete {
    background-color: rgba(182, 182, 182, 0.356);
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
    transition: .2s;
}

input:checked + .slider {
    background-color:#03A9F4;
}

input:focus + .slider {
    box-shadow: 0 0 1px #03A9F4;
}
input:checked + .slider:before {
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