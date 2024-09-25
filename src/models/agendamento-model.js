import db from "../config/db.js";

const agendamentoSchema = new db.Schema({
    data: {
        type: Date,
        required: true,
    },
    hora: {
        type: String,
        required: true
    }
});

const Agendamento = db.model("Agendamento", agendamentoSchema);

export default Agendamento;