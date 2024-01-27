<template>
    <div class="container">
        <header>
            <div class="box">
                <div class="box-item" style="background-color: #ACDAFF;">创造力</div>
                <div class="box-item" style="background-color: #916CFF;">平衡</div>
                <div class="box-item" style="background-color: #FFBD5A;">精确</div>
            </div>
        </header>
        <main>
            <!-- 消息容器 -->
            <div class="message-content" ref="messageContent">
                <!-- 每条消息 type:0 me  type:1 ai -->
                <div class="message-item" :class="item.type === 0 ? 'me' : 'ai'" v-for="(item, index) in chatList"
                    :key="index">
                    <div class="pic">
                        <img v-if="item.type === 0" src="../assets/image/me.png" alt="">
                        <img v-else src="../assets/image/SAI.png" alt="">
                    </div>
                    <div class="message-info">
                        <div class="nick">{{ item.type === 0 ? 'you:' : 'SAI:' }}</div>
                        <div class="message" v-if="item.type === 0">{{ item.message }}</div>
                        <div class="message" v-else>
                            <MdPreview :modelValue="item.message" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="message-input">
                <div class="icon">
                    <img src="../assets/image/file_icon.png" alt="">
                </div>
                <input type="text" placeholder="Message SAI..." v-model="message">
                <div class="send-btn" @click="send">
                    <img src="../assets/image/send.png" alt="">
                </div>
            </div>
        </footer>
    </div>
    <!-- 左侧菜单栏 -->
    <Menu />
</template>

<script setup>
import Menu from '../components/menu.vue'
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { nextTick, ref, watch } from 'vue';
import { reqAIRes } from '../api/ai'

let message = ref('');

let chatList = ref([]);
let statusAI = ref(true) // true为可以发送消息

const send = async () => {
    if (!message.value || !statusAI.value) return
    statusAI.value = false
    let msg = message.value
    let myMsg = {
        type: 0, // 0: me, 1: ai
        time: new Date().getTime(),
        message: message.value
    }
    chatList.value.push(myMsg)
    message.value = ''
    setTimeout(() => {
        let aiMsg = {
            type: 1,
            time: new Date().getTime(),
            message: '正在思考中...'
        }
        chatList.value.push(aiMsg)
    }, 500)
    let res = await reqAIRes(msg)
    if (res) {
        chatList.value[chatList.value.length - 1].message = res
        statusAI.value = true
    }
}

let messageContent = ref()

watch(chatList.value, () => {
    nextTick(() => {
        messageContent.value.scrollTop = messageContent.value.scrollHeight
    })
})
</script>

<style scoped>
.container {
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7.5px 0;
    position: relative;
    margin-bottom: 10px;
}

.box {
    width: 40%;
    min-width: 325px;
    height: 100%;
    border: 4px solid #916CFF;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
}

.box-item {
    flex: 1;
    height: 100%;
    background-color: skyblue;
    border-radius: 16px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 0 5px;
}

.go-sai {
    width: 120px;
    height: 50px;
    border-radius: 24px;
    background: #72A9FF;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
}

.go-sai .icon {
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

main {
    width: 100%;
    flex: 1;
    background-color: #F6F6F6;
    border-radius: 25px;
    overflow: hidden;
}

.message-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 20px;
}

.message-item {
    width: 100%;
    min-height: 90px;
    background-color: skyblue;
    padding: 15px;
    display: flex;
    margin-bottom: 20px;
    border-radius: 24px;
}

.message-item .pic {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
}

.message-item .pic img {
    width: 100%;
    height: 100%;
}

.message-item .message-info {
    flex: 1;
    height: 100%;
    color: #3D3D3D;
}

.message-item .message-info .nick {
    display: flex;
    align-items: center;
    line-height: 30px;
}

.message-item .message-info .message {
    line-height: 25px;
}

.message-content .me {
    background-color: #fff;
}

.message-content .ai {
    background-color: #B1D9FF;
}

footer {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer .message-input {
    width: 400px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border: 2px solid #969696;
    border-radius: 15px;
}

footer .message-input .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

footer .message-input input {
    flex: 1;
    height: 60%;
    margin: 0 10px;
    border: none;
    outline: none;
}

footer .message-input .send-btn {
    width: 30px;
    height: 30px;
    background-color: #B1D9FF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>