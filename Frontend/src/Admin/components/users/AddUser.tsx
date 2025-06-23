import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../../services/apiUser";

interface User {
    id: number;
    nom: string;
    email: string;
}

export const AddUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId) {
            await updateUser(editingId, nom, email);
            setEditingId(null);
        } else {
            await createUser(nom, email);
        }
        setNom("");
        setEmail("");
        fetchUsers();
    };

    const handleEdit = (user: User) => {
        setEditingId(user.id);
        setNom(user.nom);
        setEmail(user.email);
    };

    const handleDelete = async (id: number) => {
        await deleteUser(id);
        fetchUsers();
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-10 p-8 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl border border-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Gestion des Utilisateurs</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Nom complet"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="email"
                    placeholder="Adresse Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                >
                    {editingId ? "Modifier l'utilisateur" : "Ajouter l'utilisateur"}
                </button>
            </form>
            <ul className="divide-y divide-gray-200">
                {users.map((user) => (
                    <li key={user.id} className="flex justify-between items-center py-4">
                        <div>
                            <p className="text-lg font-medium text-gray-800">{user.nom}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleEdit(user)}
                                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow"
                            >
                                ✏️ Modifier
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow"
                            >
                                🗑️ Supprimer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
