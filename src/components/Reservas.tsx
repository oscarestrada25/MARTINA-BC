import { Screen } from '../App';
import { Calendar, Clock, Users, ArrowLeft, CheckCircle, Waves } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from 'figma:asset/c7a70561c676b6fe564ea88667187b0eafbd4034.png';

interface ReservasProps {
  navigateTo: (screen: Screen) => void;
}

export function Reservas({ navigateTo }: ReservasProps) {
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    area: '',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  const handleNewReservation = () => {
    setStep('form');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      area: '',
      specialRequests: '',
    });
  };

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <button
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al inicio
              </button>
              <div className="flex items-center gap-3">
                <Waves className="w-8 h-8 text-pink-500" />
                <span
                  className="text-pink-600 text-2xl tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Martina Beach Club
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Confirmation Content */}
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-2xl p-8 text-center border-t-4 border-pink-500">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-gray-800 mb-4 text-pink-600">¡Reserva Confirmada!</h1>
            <p className="text-gray-600 mb-8">
              Tu reserva ha sido registrada exitosamente. Hemos enviado un correo de confirmación a{' '}
              <span className="text-pink-600">{formData.email}</span>
            </p>

            <div className="bg-gradient-to-br from-sky-50 to-pink-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-gray-800 mb-4 text-pink-600">Detalles de la Reserva</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nombre:</span>
                  <span className="text-gray-800">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fecha:</span>
                  <span className="text-gray-800">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hora:</span>
                  <span className="text-gray-800">{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Personas:</span>
                  <span className="text-gray-800">{formData.guests}</span>
                </div>
                {formData.area && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Área:</span>
                    <span className="text-gray-800">{formData.area}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigateTo('home')}
                className="px-6 py-3 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white rounded-lg hover:from-pink-700 hover:to-fuchsia-700 transition-colors shadow-lg"
              >
                Volver al Inicio
              </button>
              <button
                onClick={handleNewReservation}
                className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
              >
                Nueva Reserva
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </button>
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Martina Beach Club"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642011252158-53c1b5c2002f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGxvdW5nZXxlbnwxfHx8fDE3NjQzMjAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Beach Club"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/60 to-pink-600/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-white mb-2 text-pink-200">Reserva tu Experiencia</h1>
            <p className="text-white text-xl">
              Completa el formulario y asegura tu lugar en el paraíso
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-2xl p-8 border-t-4 border-pink-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-gray-800 mb-4 text-pink-600">Información Personal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="+52 998 123 4567"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div>
              <h2 className="text-gray-800 mb-4 text-pink-600">Detalles de la Visita</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Fecha de Visita *
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Hora *
                  </label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="8:00">8:00 AM</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Personas *
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6 personas</option>
                    <option value="7">7 personas</option>
                    <option value="8">8 personas</option>
                    <option value="9+">Más de 8</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Area Selection */}
            <div>
              <h2 className="text-gray-800 mb-4 text-pink-600">Área Preferida</h2>
              <div>
                <label htmlFor="area" className="block text-gray-700 mb-2">
                  Selecciona un área *
                </label>
                <select
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                >
                  <option value="">Seleccionar área</option>
                  <option value="Zona de Camastros">Zona de Camastros</option>
                  <option value="Alberca con DJ">Alberca con DJ</option>
                  <option value="Restaurante">Restaurante</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="specialRequests" className="block text-gray-700 mb-2">
                Solicitudes especiales
              </label>
              <textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                rows={4}
                placeholder="Ocasión especial, preferencias alimentarias, necesidades especiales, etc."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white py-4 rounded-lg hover:from-pink-700 hover:to-fuchsia-700 transition-colors flex items-center justify-center gap-2 shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Confirmar Reserva
              </button>
              <p className="text-gray-500 text-center mt-4">
                * Campos obligatorios
              </p>
            </div>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-pink-500">
            <Calendar className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="text-gray-800 mb-2">Horarios</h3>
            <p className="text-gray-600">
              Lunes a Domingo<br />8:00 AM - 8:00 PM
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-cyan-500">
            <Clock className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
            <h3 className="text-gray-800 mb-2">Confirmación</h3>
            <p className="text-gray-600">
              Recibirás confirmación inmediata por email
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-pink-500">
            <Users className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="text-gray-800 mb-2">Grupos Grandes</h3>
            <p className="text-gray-600">
              Para más de 8 personas, contáctanos al +52 998 123 4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
