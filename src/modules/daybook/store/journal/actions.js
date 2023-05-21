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

export const updateEntry = async ({commit}, entry) => {
    const {date, picture, text} = entry
    const dataToSave = {date, picture, text}

    await axios.put(`https://vue-journal-c2a80-default-rtdb.firebaseio.com/entries/${entry.id}.json`, dataToSave)
    commit('updateEntry', {...entry})
}

export const createEntry = async ({commit}) => {

}