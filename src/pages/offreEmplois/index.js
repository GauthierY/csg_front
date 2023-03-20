import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const offreEmplois = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Liste des offres d'emplois
                </h2>
            }>
            <Head>
                <title>Liste des offres d'emplois</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Liste des offres d'emplois
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default offreEmplois
