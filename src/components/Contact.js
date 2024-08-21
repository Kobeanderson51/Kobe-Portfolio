export default function Contact() {
    return (
        <div>
            <section id="contact" class="py-20 bg-gray-100">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
                    <div class="flex justify-center">
                        <form action="#" method="post" class="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                            <div class="mb-6">
                                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                            </div>
                            <div class="flex items-center justify-between">
                                <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}