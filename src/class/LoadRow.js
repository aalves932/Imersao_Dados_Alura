module.exports = (rowSource) => {

    const row = rowSource;

    const aRecord = [
        row.NU_INSCRICAO,
        row.NU_ANO,
        row.CO_MUNICIPIO_RESIDENCIA,
        row.NO_MUNICIPIO_RESIDENCIA,
        row.CO_UF_RESIDENCIA,
        row.SG_UF_RESIDENCIA,
        row.NU_IDADE,
        row.TP_SEXO,
        row.TP_ESTADO_CIVIL,
        row.TP_COR_RACA,
        row.TP_NACIONALIDADE,
        row.CO_MUNICIPIO_NASCIMENTO,
        row.NO_MUNICIPIO_NASCIMENTO,
        row.CO_UF_NASCIMENTO,
        row.SG_UF_NASCIMENTO,
        row.TP_ST_CONCLUSAO,
        row.TP_ANO_CONCLUIU,
        row.TP_ESCOLA,
        row.TP_ENSINO,
        row.IN_TREINEIRO,
        row.CO_ESCOLA,
        row.CO_MUNICIPIO_ESC,
        row.NO_MUNICIPIO_ESC,
        row.CO_UF_ESC,
        row.SG_UF_ESC,
        row.TP_DEPENDENCIA_ADM_ESC,
        row.TP_LOCALIZACAO_ESC,
        row.TP_SIT_FUNC_ESC,
        row.IN_BAIXA_VISAO,
        row.IN_CEGUEIRA,
        row.IN_SURDEZ,
        row.IN_DEFICIENCIA_AUDITIVA,
        row.IN_SURDO_CEGUEIRA,
        row.IN_DEFICIENCIA_FISICA,
        row.IN_DEFICIENCIA_MENTAL,
        row.IN_DEFICIT_ATENCAO,
        row.IN_DISLEXIA,
        row.IN_DISCALCULIA,
        row.IN_AUTISMO,
        row.IN_VISAO_MONOCULAR,
        row.IN_OUTRA_DEF,
        row.IN_GESTANTE,
        row.IN_LACTANTE,
        row.IN_IDOSO,
        row.IN_ESTUDA_CLASSE_HOSPITALAR,
        row.IN_SEM_RECURSO,
        row.IN_BRAILLE,
        row.IN_AMPLIADA_24,
        row.IN_AMPLIADA_18,
        row.IN_LEDOR,
        row.IN_ACESSO,
        row.IN_TRANSCRICAO,
        row.IN_LIBRAS,
        row.IN_TEMPO_ADICIONAL,
        row.IN_LEITURA_LABIAL,
        row.IN_MESA_CADEIRA_RODAS,
        row.IN_MESA_CADEIRA_SEPARADA,
        row.IN_APOIO_PERNA,
        row.IN_GUIA_INTERPRETE,
        row.IN_COMPUTADOR,
        row.IN_CADEIRA_ESPECIAL,
        row.IN_CADEIRA_CANHOTO,
        row.IN_CADEIRA_ACOLCHOADA,
        row.IN_PROVA_DEITADO,
        row.IN_MOBILIARIO_OBESO,
        row.IN_LAMINA_OVERLAY,
        row.IN_PROTETOR_AURICULAR,
        row.IN_MEDIDOR_GLICOSE,
        row.IN_MAQUINA_BRAILE,
        row.IN_SOROBAN,
        row.IN_MARCA_PASSO,
        row.IN_SONDA,
        row.IN_MEDICAMENTOS,
        row.IN_SALA_INDIVIDUAL,
        row.IN_SALA_ESPECIAL,
        row.IN_SALA_ACOMPANHANTE,
        row.IN_MOBILIARIO_ESPECIFICO,
        row.IN_MATERIAL_ESPECIFICO,
        row.IN_NOME_SOCIAL,
        row.CO_MUNICIPIO_PROVA,
        row.NO_MUNICIPIO_PROVA,
        row.CO_UF_PROVA,
        row.SG_UF_PROVA,
        row.TP_PRESENCA_CN,
        row.TP_PRESENCA_CH,
        row.TP_PRESENCA_LC,
        row.TP_PRESENCA_MT,
        row.CO_PROVA_CN,
        row.CO_PROVA_CH,
        row.CO_PROVA_LC,
        row.CO_PROVA_MT,
        row.NU_NOTA_CN,
        row.NU_NOTA_CH,
        row.NU_NOTA_LC,
        row.NU_NOTA_MT,
        row.TX_RESPOSTAS_CN,
        row.TX_RESPOSTAS_CH,
        row.TX_RESPOSTAS_LC,
        row.TX_RESPOSTAS_MT,
        row.TP_LINGUA,
        row.TX_GABARITO_CN,
        row.TX_GABARITO_CH,
        row.TX_GABARITO_LC,
        row.TX_GABARITO_MT,
        row.TP_STATUS_REDACAO,
        row.NU_NOTA_COMP1,
        row.NU_NOTA_COMP2,
        row.NU_NOTA_COMP3,
        row.NU_NOTA_COMP4,
        row.NU_NOTA_COMP5,
        row.NU_NOTA_REDACAO,
        row.Q001,
        row.Q002,
        row.Q003,
        row.Q004,
        row.Q005,
        row.Q006,
        row.Q007,
        row.Q008,
        row.Q009,
        row.Q010,
        row.Q011,
        row.Q012,
        row.Q013,
        row.Q014,
        row.Q015,
        row.Q016,
        row.Q017,
        row.Q018,
        row.Q019,
        row.Q020,
        row.Q021,
        row.Q022,
        row.Q023,
        row.Q024,
        row.Q025
    ]

    let cPar = "";
    for(var i=1; i <= aRecord.length; i++){
        if (i == 1) {
            cPar = "$"+i
        } else {
            cPar = cPar +", $"+i
        }
    }

    
    return ({
        aRecord, cPar
    });
}