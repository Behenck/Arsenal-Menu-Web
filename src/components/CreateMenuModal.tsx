'use client'
import React, { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Camera, X } from 'lucide-react'
import { MediaPicker } from './MediaPicker'

interface CreateMenuModalProps {
  children: ReactNode
}

export function CreateMenuModal({ children }: CreateMenuModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Criar novo item
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Criar um novo item no cardápio
          </Dialog.Description>
          <form>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="media"
                className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
              >
                <Camera className="h-4 w-4" />
                Anexar mídia
              </label>
              <MediaPicker />
              <input
                type="text"
                placeholder="Nome"
                className="w-full p-2 rounded"
              />
              <input
                type="text"
                placeholder="R$ 10,00"
                className="w-full p-2 rounded"
              />
            </div>
          </form>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
