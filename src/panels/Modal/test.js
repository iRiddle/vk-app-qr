<ModalRoot activeModal={this.state.activeModal}>
  <ModalCard
    id={MODAL_CARD_MONEY_SEND}
    onClose={() => this.setActiveModal(null)}
    icon={<Icon56MoneyTransferOutline />}
    title="Отправляйте деньги друзьям, используя банковскую карту"
    caption="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
    actions={[
      {
        title: "Попробовать",
        type: "primary",
        action: () => {
          this.setActiveModal(MODAL_CARD_APP_TO_MENU);
        }
      }
    ]}
  />

  <ModalCard
    id={MODAL_CARD_APP_TO_MENU}
    onClose={() => this.setActiveModal(null)}
    icon={
      <Avatar
        type="app"
        src="https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg"
        size={72}
      />
    }
    title="Добавить игру «Загадки детства» в меню?"
    caption="Игра появится под списком разделов на экране меню и будет всегда под рукой."
    actions={[
      {
        title: "Добавить в меню",
        type: "primary",
        action: () => {
          this.setActiveModal(MODAL_CARD_ABOUT);
        }
      }
    ]}
  />

  <ModalCard
    id={MODAL_CARD_ABOUT}
    onClose={() => this.setActiveModal(null)}
    title="Расскажите о себе"
    actions={[
      {
        title: "Сохранить",
        type: "primary",
        action: () => {
          this.setActiveModal(MODAL_CARD_NOTIFICATIONS);
        }
      }
    ]}
  >
    <Textarea defaultValue={"В Грузии"} />
  </ModalCard>

  <ModalCard
    id={MODAL_CARD_NOTIFICATIONS}
    onClose={() => this.setActiveModal(null)}
    icon={<Icon56NotificationOutline />}
    title="Приложение запрашивает разрешение на отправку Вам уведомлений"
    actions={[
      {
        title: "Запретить",
        type: "secondary",
        action: () => this.setActiveModal(MODAL_CARD_CHAT_INVITE)
      },
      {
        title: "Разрешить",
        type: "primary",
        action: () => this.setActiveModal(MODAL_CARD_CHAT_INVITE)
      }
    ]}
  />

  <ModalCard
    id={MODAL_CARD_CHAT_INVITE}
    onClose={() => this.setActiveModal(null)}
    icon={
      <Avatar
        src="https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg"
        size={72}
      />
    }
    title="Баскетбол на выходных"
    caption="Приглашение в беседу"
    actions={[
      {
        title: "Присоединиться",
        type: "primary",
        action: () => this.setActiveModal(null)
      },
      {
        title: "Скопировать приглашение",
        type: "secondary",
        action: () => this.setActiveModal(null)
      }
    ]}
    actionsLayout="vertical"
  >
    <UsersStack
      photos={[
        "https://sun9-9.userapi.com/c847219/v847219582/1eac9d/jxtvce2MwZk.jpg?ava=1",
        "https://pp.userapi.com/c834200/v834200315/1039ea/iFd9WUOdmDo.jpg?ava=1",
        "https://sun9-20.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1",
        "https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1",
        "https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1",
        "https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1"
      ]}
      size="m"
      count={3}
      vertical
    >
      Алексей, Илья, Михаил
      <br />и ещё 3 человека
    </UsersStack>
  </ModalCard>
</ModalRoot>;
