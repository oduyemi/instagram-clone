import Dexie from 'dexie'

export const db = new Dexie('instaDb')
db.version(1).stores({
  bio: ',name,about',
  gallery: '++id,url',
})