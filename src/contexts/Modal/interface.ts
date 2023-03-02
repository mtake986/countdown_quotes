export interface Props {
  children: React.ReactNode;
}


export type ModalContextType = {
  selectedTypeAndAct: {
    type: string;
    act: string;
  };
  handleSelectTypeAndAct: (type: string, act: string) => void;
  currPageNum: number;
  handleCurrPageNum: (text: string) => void;

  isModalOpen: boolean;
  handleToggleModal: () => void;
};



