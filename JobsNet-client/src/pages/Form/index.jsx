import { useState } from 'react';
import axios from 'axios';
import logo from './icon.svg';
import './styles.css';
import { useHistory } from 'react-router-dom';

export function Form() {
    const history = useHistory(); // Utilizado para redirecionar página.
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [date, setDate] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [houseNumber, sethouseNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [cep, setCep] = useState('');
    const [federativeUnit, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [celphone, SetCelphone] = useState('');
    const [contactPhone, SetContactPhone] = useState('');
    const [contactName, SetContactName] = useState('');
    const [rg, SetRG] = useState('');
    const [cpf, SetCPF] = useState('');
    const [cnh, SetCNH] = useState('');
    const [cnhCategory, SetCnhCategory] = useState('');


    async function searchCep(event) {
        let cep = event;
        if (cep.length === 8) {
            try {
                const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                console.log(result.data)
                if (result.data.erro) {
                    alert('Cep não encontrado');
                    clear();
                }
                setAddress(result.data.logradouro);
                setNeighborhood(result.data.bairro);
                setCity(result.data.localidade);
            } catch (err) {
                alert('Cep não encontrado');
                clear();
            }
        } else if (cep.length === 0) {
            return;
        } else {
            alert('Digite os 8 números do CEP');
        }
    }

    async function clear() {
        setAddress('');
        sethouseNumber('');
        setComplement('');
        setNeighborhood('');
        setCity('');
        setCep('');
    }

    async function submitForm(e) {
        e.preventDefault();
        try {
            const result = await axios.post('https://gama-jobsnet-backend.herokuapp.com/register', {
                name, profession, date, maritalStatus, gender,
                address, houseNumber, complement, neighborhood, city, 
                cep, federativeUnit, email, celphone, contactPhone, contactName,
                rg, cpf, cnh, cnhCategory
            });
            alert(result.data.message);
            history.push('/congratulations');
        }catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
        <div id="formpage">
            <header>
                <h1>JobsNet</h1>
                <div>
                    <img src={logo} className="app-logo" alt="logo" />
                </div>
            </header>
            <main>
                <h1>Preencha o formulário abaixo</h1>
                <form onSubmit={submitForm}>
                    <legend>
                        <h2>Dados pessoais</h2>
                    </legend>
                    <hr />
                    {/* Linha 1 */}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Nome Completo</label>
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Cargo Pretendido</label>
                            <input type="name" className="form-control" value={profession} onChange={e => setProfession(e.target.value)} required />
                        </div>
                    </div>
                    {/* Linha 2 */}
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Data</label>
                            <input id="datepickerfrom" className="form-control" name="datepickerfrom" type="date" value={date} onChange={e => setDate(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Estado Civil</label>
                            <select className="custom-select" value={maritalStatus} onChange={e => setMaritalStatus(e.target.value)} required>
                                <option value="">Selecione</option>
                                <option value="Solteiro">Solteiro</option>
                                <option value="Casado">Casado</option>
                                <option value="Divorciado">Divorciado</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Gênero</label>
                            <select className="custom-select" value={gender} onChange={e => setGender(e.target.value)} required>
                                <option value="">Selecione</option>
                                <option value="MascCis">Masculino Cis</option>
                                <option value="MascTrans">Masculino Trans</option>
                                <option value="FemCis">Feminino Cis</option>
                                <option value="FemTrans">Feminino Trans</option>
                                <option value="Nr">Não-binário</option>
                                <option value="Outro">Outro</option>
                                <option value="Nr">Prefiro não responder</option>
                            </select>
                        </div>
                    </div>

                    <legend>
                        <h2>Documentos</h2>
                    </legend>
                    <hr />

                    {/* Linha 1 */}
                    <div className="form-row" id="linha_1documentos">
                        <div className="form-group col-md-4">
                            <label>Identidade</label>
                            <input type="text" className="form-control" value={rg}
                                onChange={e => SetRG(e.target.value)} placeholder="somente números" required />
                        </div>
                        <div className="form-group col-md-4">
                            <label>CPF</label>
                            <input type="text" className="form-control" value={cpf}
                                onChange={e => SetCPF(e.target.value)} placeholder="Somente números" required />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Habilitação? </label>
                            <select className="custom-select" value={cnh} onChange={e => SetCNH(e.target.value)} required>
                                <option value=""></option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Categoria</label>
                            <select className="custom-select" value={cnhCategory} onChange={e => SetCnhCategory(e.target.value)}>
                                <option value=""></option>
                                <option value="CatA">A</option>
                                <option value="CatB">B</option>
                                <option value="CatC">C</option>
                                <option value="CatD">D</option>
                                <option value="CatE">E</option>
                            </select>
                        </div>                    
                    </div> 


                    <legend>
                        <h2>Endereço</h2>
                    </legend>
                    <hr />

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>CEP</label>
                            <input type="name" className="form-control" maxLength={8} placeholder="somente números" 
                            onChange={e => setCep(e.target.value)}
                            onBlur={(event) => searchCep(event.target.value)}
                            value={cep} required />
                        </div>
                                
                        <div className="form-group col-md-8">
                            <label>Endereço</label>
                            <input type="name" className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Número</label>
                            <input type="text" className="form-control" value={houseNumber} onChange={e => sethouseNumber(e.target.value)}/>
                        </div>

                        <div className="form-group col-md-4">
                            <label>Complemento</label>
                            <input type="text" className="form-control" value={complement} onChange={e => setComplement(e.target.value)} />
                        </div>

                        <div className="form-group col-md-5">
                            <label>Bairro</label>
                            <input type="name" className="form-control" value={neighborhood} onChange={e => setNeighborhood(e.target.value)} required />
                        </div>
                    </div>


                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Cidade</label>
                                <input type="text" className="form-control" value={city} onChange={e => setCity(e.target.value)} />
                            </div>

                            <div className="form-group col-md-4">
                                <label>UF</label>
                                <select className="custom-select" value={federativeUnit} onChange={e => setUf(e.target.value)} required>
                                        <option value="">Selecione</option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espirito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </select>
                            </div>
                        </div>



                    <legend>
                        <h2>Contato</h2>
                    </legend>
                    <hr />

                    {/* Linha 1 */}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>E-mail</label>
                            <input type="email" className="form-control" value={email}
                            onChange={e => setEmail(e.target.value)} required placeholder="Seu melhor e-mail" />
                        </div>

                        <div className="form-group col-md-4">
                            <label>Celular</label>
                            <input type="text" className="form-control" value={celphone}
                            onChange={e => SetCelphone(e.target.value)} required placeholder="00 000000000" />
                        </div>
                    </div>

                    {/* Linha 2 */}
                    <div className="form-row" id="linha_1contato">
                        <div className="form-group col-md-4">
                            <label>Telefone contato</label>
                            <input type="text" className="form-control" value={contactPhone}
                            onChange={e => SetContactPhone(e.target.value)} placeholder="00 000000000" />
                        </div>

                        <div className="form-group col-md-6">
                            <label>Nome do contato</label>
                            <input type="name" className="form-control" value={contactName}
                            onChange={e => SetContactName(e.target.value)}/>
                            <br />
                            
                        </div>
                    </div>

                    <button type="submit" id='submitButton'>Enviar formulário</button>
                </form>
            </main>
        </div>
    );
}