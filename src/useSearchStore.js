import create from 'zustand';

const useSearchStore = create((set) => ({
  
  leavingFrom: '',
  goingTo: '',
}));

export default useSearchStore;