if (req.body.email && req.body.senha === req.body.repetirsenha) {

    const hash = bcrypt.hashSync(req.body.senha, saltRounds);

    const created = await User.create({

        email: req.body.email,

        senha: hash

    });

    res.json({ registrado: true, mensagem: "Registrado!" });

} else {

    res.json({ registrado: false, mensagem: "Erro ao registrar!" });

}
