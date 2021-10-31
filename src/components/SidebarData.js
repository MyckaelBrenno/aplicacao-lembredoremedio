import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Novo Lembrete',
    path: '/',
    icon: <AiIcons.AiFillMail />,
    cName: 'nav-text'
  },
  {
    title: 'Nova Promoção/Anúncio',
    path: '/promocao',
    icon: <AiIcons.AiFillNotification />,
    cName: 'nav-text'
  },
  {
    title: 'Cadastro de Atendente',
    path: '/atendente',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Relatórios',
    path: '/relatorios',
    icon: <AiIcons.AiFillFile />,
    cName: 'nav-text'
  },
  {
    title: 'Compra de Lembretes',
    path: '/compras',
    icon: <AiIcons.AiFillDollarCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Dados Cadastrais',
    path: '/meusdados',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Sair',
    path: '/',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
]

export default SidebarData
