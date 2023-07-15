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
        Schema::create('nilai_formatifs', function (Blueprint $table) {
            $table->id();
            $table->text('pekan_1')->nullable();
            $table->text('pekan_2')->nullable();
            $table->text('pekan_3')->nullable();
            $table->text('pekan_4')->nullable();
            $table->foreignId('peserta_id');
            $table->foreignId('leaf_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nilai_formatifs');
    }
};