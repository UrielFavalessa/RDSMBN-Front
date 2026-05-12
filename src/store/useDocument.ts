import { documentType } from "@/types/document";
import { create } from "zustand";

type documentStoreProps = {
  documents: documentType[];
  setDocuments: (documents: documentType[]) => void;
  addDocument: (document: documentType) => void;
  editDocument: (updated: documentType) => void;
  removeDocument: (id: number | string) => void;
};

export const useDocumentsStore = create<documentStoreProps>(
  (set) => ({
    documents: [],

    setDocuments: (documents) => set({ documents }),

    addDocument: (documents) =>
      set((state) => ({
        documents: [documents, ...state.documents],
      })),

    editDocument: (updated) =>
      set((state) => ({
        documents: state.documents.map((n) =>
          n.id === updated.id ? updated : n
        ),
      })),

    removeDocument: (id) =>
      set((state) => ({
        documents: state.documents.filter(
          (n) => n.id !== id
        ),
      })),
  })
);
