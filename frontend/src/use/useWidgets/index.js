import { reactive, computed } from "vue"

import app from "@/feather-client"

let user_id;

const widgetList= reactive({
   widgetsReady: false,
   widgets: [],
})

app.on('logout', () => {
    console.log('widgets, logout')
    widgetList.widgetsReady = []
    widgetList.widgetsReady = false
    user_id = null
})

app.on('login', data => {
    user_id = data.user.id
})

app.service('widgets').on('created', async widget => {
    if(widget.user_id === user_id){
        console.log('Widget created', widget)
        widgetList.widgets[widget.id] = widget
    }
})

app.service('widgets').on('patched', widget => {
    if(widget.user_id === user_id){
        console.log('Widget patched', widget)
        widgetList.widgets[widget.id] = widget
    }
})

app.service('widgets').on('removed', widget=> {
    if(widget.user_id === user_id){
        console.log('Widget removed', widget)
        delete widgetList.widgets[widgetList.widgets.findIndex(w => {
            if (w){
                return w.id === widget.id
            }
            return false;
        })]
        console.log(widgetList.widgets)
    }
})

app.service('widgets').on('updated', widget=> {
    if(widget.user_id === user_id){
        console.log('Widget updated', widget)
        widgetList.widgets[widget.id] = widget
    }
})

const addWidget = async (json) => {
    await app.service('widgets').create({widget: json, user_id})
}

const deleteWidget = async (id) => {
    await app.service('widgets').remove(id)
}

const widgets = computed(() => {
    if (!user_id) {
        return []
    }
    if(!widgetList.widgetsReady){
        app.service('widgets').find({query:{user_id: user_id}}).then(list => {
            widgetList.widgets = list
            widgetList.widgetsReady = true
        })
        return []
    }
    return Object.values(widgetList.widgets)
})

export function useWidgets() {
    return {
        widgets, addWidget, deleteWidget, 
    }
}