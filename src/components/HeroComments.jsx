import React, { useEffect, useState } from 'react';
import { database } from '../database/firebase';
import { ref, push, onValue } from 'firebase/database';
import { getCurrentUser } from '../services/authService';
import './HeroComments.css';

export default function HeroComments({ heroId }) {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!heroId) return;

        const commentsRef = ref(database, `comments/${heroId}`);

        return onValue(commentsRef, (snapshot) => {
            const val = snapshot.val() || {};

            const list = Object.keys(val)
                .map((k) => ({
                    id: k,
                    ...val[k],
                }))
                .sort(
                    (a, b) =>
                        new Date(b.createdAt) - new Date(a.createdAt)
                );

            setComments(list);
        });
    }, [heroId]);

    const submit = async (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        setLoading(true);

        try {
            const user = getCurrentUser();

            const payload = {
                text: text.trim(),
                author: user?.displayName || 'Invitado',
                uid: user?.uid || null,
                createdAt: new Date().toISOString(),
            };

            await push(ref(database, `comments/${heroId}`), payload);

            setText('');
        } catch (err) {
            console.error('Error saving comment', err);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('es-EC', {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(new Date(date));
    };

    return (
        <section className="comments">

            <div className="comments-header">
                <h3>Comentarios</h3>

                <span>
                    {comments.length} comentarios
                </span>
            </div>

            <form className="comment-form" onSubmit={submit}>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Agregar comentario..."
                    maxLength={300}
                />

                <div className="comment-form-footer">

                    <span>
                        {text.length}/300
                    </span>

                    <button
                        type="submit"
                        disabled={loading || !text.trim()}
                    >
                        {loading ? 'Enviando...' : 'Comentar'}
                    </button>

                </div>

            </form>

            <div className="comments-list">

                {comments.length === 0 && (
                    <div className="comments-empty">
                        No hay comentarios todavía
                    </div>
                )}

                {comments.map((c) => (
                    <article
                        key={c.id}
                        className="comment-item"
                    >

                        <div className="comment-avatar">
                            {c.author?.charAt(0).toUpperCase()}
                        </div>

                        <div className="comment-body">

                            <div className="comment-top">

                                <strong>
                                    {c.author}
                                </strong>

                                <span>
                                    {new Date(c.createdAt)
                                        .toLocaleDateString()}
                                </span>

                            </div>

                            <p>
                                {c.text}
                            </p>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}