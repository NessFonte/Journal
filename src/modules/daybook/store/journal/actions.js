import axios from "axios"

export const loadEntries = async ({commit}) => {
    const {data} = await axios.get('https://vue-journal-c2a80-default-rtdb.firebaseio.com/entries.json')
    const entries = []
    for(let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntry = async ({commit}) => {

}

export const createEntry = async ({commit}) => {

}