import { defineStore, _ActionsTree, _GettersTree } from "pinia"

const initState: State = {
  unit: "primaris_captain"
}

const getters: _GettersTree<State> = {
  getUnit: (state) => state.unit
}

// 將其命名為useXXXStore，就像vue3的composable一樣
const useStore = defineStore("main", {
  state: () => initState,
  getters,
  actions: {
    setUnit(payload: string) {
      this.unit = payload
    }
  }
})

export interface State {
  unit: string
}

export default useStore
