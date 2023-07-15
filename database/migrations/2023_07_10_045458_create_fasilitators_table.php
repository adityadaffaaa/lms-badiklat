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
        Schema::create('fasilitators', function (Blueprint $table) {
            $table->id();
            $table->string('nama')->nullable();
            $table->bigInteger('nip')->unique();
            $table->bigInteger('nik')->unique();
            $table->foreignId('role_id');
            $table->string('email')->unique();
            $table->string('username')->unique();
            $table->string('photo')->nullable();
            $table->string('tempat_lahir')->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->enum('agama', ['islam', 'kristen', 'hindu', 'buddha', 'konghucu'])->nullable();
            $table->string('surat_tugas')->nullable();
            $table->string('surat_keterangan_mengajar')->nullable();
            $table->string('surat_pertanggung_jawaban')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fasilitators');
    }
};