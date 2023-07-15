<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('panitias', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->bigInteger('nip')->unique();
            $table->bigInteger('nik')->unique();
            $table->foreignId('role_id');
            $table->string('email')->unique();
            $table->string('username')->unique();
            $table->string('photo')->nullable();
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('panitias');
    }
};