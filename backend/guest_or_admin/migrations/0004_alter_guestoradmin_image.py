# Generated by Django 5.1.1 on 2024-10-03 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guest_or_admin', '0003_rename_is_mastar_admin_guestoradmin_is_master_admin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guestoradmin',
            name='image',
            field=models.URLField(max_length=500),
        ),
    ]