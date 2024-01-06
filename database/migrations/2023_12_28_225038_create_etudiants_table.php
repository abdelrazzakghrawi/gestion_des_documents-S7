<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('etudiants', function (Blueprint $table) {
            $table->id();
             $table->string('name', 100);
            $table->string('surname', 100);
            $table->string('cin', 100);
            $table->date('datedenaissance');
            $table->string('mobile_number', 100);
            $table->string('address_line1', 100);
            $table->string('address_line2', 100);
            $table->string('email', 100)->unique();
            $table->string('filliere', 100);
            $table->string('annee', 100);
            $table->string('Country', 100);
            $table->string('Region', 100);
            $table->string('paiement_status', 100)->default('25');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etudiants');
    }
};
