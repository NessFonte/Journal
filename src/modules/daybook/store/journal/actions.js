import journalApi from "@/api/journalApi"

export const loadEntries = async ({commit}) => {
    const {data} = await journalApi.get('/entries.json')
    if(!data) {
        commit('setEntires', [])
        return
    }
    
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

    await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    commit('updateEntry', {...entry})
}

export const createEntry = async ({commit}, entry) => {
    const {date, picture, text} = entry
    const dataToSave = {date, picture, text}

    const {data} = await journalApi.post(`/entries.json`, dataToSave)
    dataToSave.id = data.name
    commit('createEntry', dataToSave)

    return data.name
}

export const deleteEntry = async ({commit}, entry) => {
    await journalApi.delete(`/entries/${entry.id}.json`)
    commit('deleteEntry', {...entry})

    return entry.id
}